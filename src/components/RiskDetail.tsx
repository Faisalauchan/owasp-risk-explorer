
import { RiskCategory } from "@/types/owasp";
import { SeverityBadge } from "./SeverityBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { VulnerabilityDetail } from "./VulnerabilityDetail";
import * as LucideIcons from "lucide-react";

type RiskDetailProps = {
  risk: RiskCategory;
};

export function RiskDetail({ risk }: RiskDetailProps) {
  const IconComponent = (LucideIcons as any)[risk.icon.charAt(0).toUpperCase() + risk.icon.slice(1)];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center space-x-4 mb-4">
        {IconComponent && <IconComponent className="h-8 w-8 text-security-accent" />}
        <div>
          <h2 className="text-2xl font-bold">
            {risk.name}
            <span className="ml-2 text-sm text-muted-foreground">{risk.id}</span>
          </h2>
          <div className="flex items-center mt-1">
            <span className="text-sm font-medium mr-2">Rank #{risk.rank}</span>
            <SeverityBadge severity={risk.severity} />
          </div>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <p>{risk.description}</p>
          
          {risk.cwe && risk.cwe.length > 0 && (
            <div className="mt-4">
              <span className="text-sm font-medium">CWE References: </span>
              {risk.cwe.map((cwe, index) => (
                <span key={cwe} className="text-sm text-muted-foreground">
                  {cwe}{index < risk.cwe!.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <h3 className="text-xl font-semibold mb-4">Common Vulnerabilities</h3>
      <div className="space-y-4">
        {risk.vulnerabilities.map((vulnerability) => (
          <VulnerabilityDetail key={vulnerability.id} vulnerability={vulnerability} />
        ))}
      </div>
    </div>
  );
}
