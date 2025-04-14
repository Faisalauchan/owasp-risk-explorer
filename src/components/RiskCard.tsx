
import { RiskCategory } from "@/types/owasp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SeverityBadge } from "./SeverityBadge";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

type RiskCardProps = {
  risk: RiskCategory;
  isSelected: boolean;
  onClick: (risk: RiskCategory) => void;
};

export function RiskCard({ risk, isSelected, onClick }: RiskCardProps) {
  const IconComponent = (LucideIcons as any)[risk.icon.charAt(0).toUpperCase() + risk.icon.slice(1)];

  return (
    <Card 
      className={cn(
        "cursor-pointer hover:shadow-md transition-all duration-200",
        isSelected ? "border-2 border-security-accent ring-2 ring-security-accent/20" : "hover:border-security-accent/50"
      )}
      onClick={() => onClick(risk)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">
            <span className="text-sm text-muted-foreground mr-2">#{risk.rank}</span>
            {risk.name}
          </CardTitle>
          <SeverityBadge severity={risk.severity} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-2">
          {IconComponent && <IconComponent className="h-5 w-5 text-security-accent" />}
          <span className="text-sm font-medium text-muted-foreground">{risk.id}</span>
        </div>
        <p className="text-sm line-clamp-2">{risk.description}</p>
      </CardContent>
    </Card>
  );
}
