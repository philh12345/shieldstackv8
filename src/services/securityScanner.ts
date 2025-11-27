import { Lock, Globe, Shield, Mail } from 'lucide-react';
import type { SecurityScanResult, SecurityCheck } from '@/types/security';
import { runReputationChecks } from './reputationChecker';

// Check if HTTPS is available
const checkHTTPS = async (domain: string): Promise<'pass' | 'fail'> => {
  try {
    const response = await fetch(`https://${domain}`, { 
      method: 'HEAD',
      mode: 'no-cors'
    });
    return 'pass';
  } catch (error) {
    return 'fail';
  }
};

// Check DNS records using DNS over HTTPS
const checkDNSRecords = async (domain: string): Promise<{ hasA: boolean; hasMX: boolean }> => {
  try {
    const [aRecords, mxRecords] = await Promise.all([
      fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
        headers: { 'Accept': 'application/dns-json' }
      }).then(r => r.json()),
      fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=MX`, {
        headers: { 'Accept': 'application/dns-json' }
      }).then(r => r.json())
    ]);

    return {
      hasA: aRecords.Answer && aRecords.Answer.length > 0,
      hasMX: mxRecords.Answer && mxRecords.Answer.length > 0
    };
  } catch (error) {
    console.error('DNS check error:', error);
    return { hasA: false, hasMX: false };
  }
};

// Check for SPF record
const checkSPF = async (domain: string): Promise<'pass' | 'warning' | 'fail'> => {
  try {
    const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=TXT`, {
      headers: { 'Accept': 'application/dns-json' }
    });
    const data = await response.json();
    
    if (data.Answer) {
      const hasSPF = data.Answer.some((record: any) => 
        record.data && record.data.includes('v=spf1')
      );
      return hasSPF ? 'pass' : 'fail';
    }
    return 'fail';
  } catch (error) {
    console.error('SPF check error:', error);
    return 'warning';
  }
};

export const runSecurityScan = async (domain: string): Promise<SecurityScanResult> => {
  console.log(`Running security scan for: ${domain}`);
  
  // Normalize domain (lowercase, remove protocol and trailing slash)
  const normalizedDomain = domain.toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '');
  console.log(`Normalized domain: ${normalizedDomain}`);
  
  // Run checks in parallel
  const [httpsStatus, dnsRecords, spfStatus] = await Promise.all([
    checkHTTPS(normalizedDomain),
    checkDNSRecords(normalizedDomain),
    checkSPF(normalizedDomain)
  ]);

  const checks: SecurityCheck[] = [
    {
      title: "Website Encryption",
      description: "We checked if your website uses encryption (the padlock icon in the browser). This protects your visitors' information when they use your site.",
      status: httpsStatus,
      recommendation: httpsStatus === 'pass' 
        ? "Your website is encrypted. This is good for protecting your visitors."
        : "Your website isn't encrypted. This means hackers could steal information from your visitors. Contact your web hosting company to fix this.",
      icon: Lock
    },
    {
      title: "Website Accessibility",
      description: "We checked if people can actually find and visit your website when they type in your web address.",
      status: dnsRecords.hasA ? 'pass' : 'fail',
      recommendation: dnsRecords.hasA
        ? "Your website is accessible and people can visit it."
        : "There's a problem with your website address. People might not be able to find your site. Contact your web hosting company.",
      icon: Globe
    },
    {
      title: "Email Setup",
      description: "We checked if your business email is set up properly so you can send and receive messages.",
      status: dnsRecords.hasMX ? 'pass' : 'warning',
      recommendation: dnsRecords.hasMX
        ? "Your email is set up and working."
        : "Your email might not be set up. If you want to use email with your domain name (like you@yourcompany.com), you'll need to configure this.",
      icon: Mail
    },
    {
      title: "Email Security",
      description: "We checked if you have basic protection to stop spammers from pretending to send emails from your company.",
      status: spfStatus,
      recommendation: spfStatus === 'pass'
        ? "You have basic email security in place."
        : "Your email isn't protected from spammers. This means criminals can send fake emails pretending to be you. Ask your email provider about SPF records.",
      icon: Shield
    }
  ];

  // Run real reputation checks
  const reputationChecks = await runReputationChecks(normalizedDomain);

  return {
    domain: normalizedDomain,
    scannedAt: new Date(),
    checks,
    reputationChecks
  };
};