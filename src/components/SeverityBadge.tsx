
import { RiskSeverity } from "@/types/owasp";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type SeverityBadgeProps = {
  severity: RiskSeverity;
  className?: string;
};

const getSeverityColor = (severity: RiskSeverity) => {
  switch (severity) {
    case "Critical":
      return "bg-security-critical text-white hover:bg-security-critical/90";
    case "High":
      return "bg-security-high text-white hover:bg-security-high/90";
    case "Medium":
      return "bg-security-medium text-black hover:bg-security-medium/90";
    case "Low":
      return "bg-security-low text-black hover:bg-security-low/90";
    case "Info":
      return "bg-security-info text-white hover:bg-security-info/90";
    default:
      return "";
  }
};

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  return (
    <Badge className={cn(getSeverityColor(severity), className)}>
      {severity}
    </Badge>
  );
}
