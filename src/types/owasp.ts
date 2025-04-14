
export type RiskSeverity = "Critical" | "High" | "Medium" | "Low" | "Info";

export type Vulnerability = {
  id: string;
  name: string;
  description: string;
  impact: string;
  example?: string;
  mitigation: string;
  severity: RiskSeverity;
};

export type RiskCategory = {
  id: string;
  rank: number;
  name: string;
  description: string;
  icon: string;
  severity: RiskSeverity;
  vulnerabilities: Vulnerability[];
  cwe?: string[];
};
