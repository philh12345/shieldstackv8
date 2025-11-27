import { LucideIcon } from 'lucide-react';

export interface SecurityCheck {
  title: string;
  description: string;
  status: 'pass' | 'warning' | 'fail';
  recommendation: string;
  icon: LucideIcon;
}

export interface ReputationCheck {
  name: string;
  status: 'clean' | 'listed' | 'error';
  description: string;
}

export interface SecurityScanResult {
  domain: string;
  scannedAt: Date;
  checks: SecurityCheck[];
  reputationChecks?: ReputationCheck[];
}