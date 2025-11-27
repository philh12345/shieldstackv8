import type { ReputationCheck } from '@/types/security';

// DNS-based blacklist checker using DNS over HTTPS (Cloudflare)
const checkDNSBlacklist = async (domain: string, blacklistDomain: string): Promise<boolean> => {
  try {
    const query = `${domain}.${blacklistDomain}`;
    const response = await fetch(
      `https://cloudflare-dns.com/dns-query?name=${query}&type=A`,
      {
        headers: {
          'Accept': 'application/dns-json'
        }
      }
    );
    const data = await response.json();
    // If we get an answer, the domain is listed
    return data.Answer && data.Answer.length > 0;
  } catch (error) {
    console.error(`Error checking ${blacklistDomain}:`, error);
    return false;
  }
};

export const runReputationChecks = async (domain: string): Promise<ReputationCheck[]> => {
  console.log(`Running reputation checks for: ${domain}`);
  
  // Normalize domain
  const normalizedDomain = domain.toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '');
  
  const checks: ReputationCheck[] = [];

  // Spamhaus DBL - DNS-based check
  try {
    const isListed = await checkDNSBlacklist(normalizedDomain, 'dbl.spamhaus.org');
    checks.push({
      name: "Spamhaus",
      status: isListed ? 'listed' : 'clean',
      description: "Checks if your domain is known for sending spam or hosting malicious content."
    });
  } catch (error) {
    console.log('Spamhaus check failed');
  }

  // SURBL - DNS-based check
  try {
    const isListed = await checkDNSBlacklist(normalizedDomain, 'multi.surbl.org');
    checks.push({
      name: "SURBL",
      status: isListed ? 'listed' : 'clean',
      description: "Checks if your domain appears in spam emails or suspicious messages."
    });
  } catch (error) {
    console.log('SURBL check failed');
  }

  return checks;
};