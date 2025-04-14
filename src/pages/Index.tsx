
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { owaspTop10 } from '@/data/owaspData';
import { RiskCategory } from '@/types/owasp';
import { RiskCard } from '@/components/RiskCard';
import { RiskDetail } from '@/components/RiskDetail';
import { Button } from '@/components/ui/button';
import { ShieldAlert, PlayCircle } from 'lucide-react';

const Index = () => {
  const [selectedRisk, setSelectedRisk] = useState<RiskCategory | null>(null);

  const handleRiskClick = (risk: RiskCategory) => {
    setSelectedRisk(risk);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 py-8 mx-auto">
        <header className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <ShieldAlert size={48} className="text-security-accent animate-pulse-slow" />
          </div>
          <h1 className="text-4xl font-bold mb-2">OWASP Top 10 Risk Explorer</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Interactive visualization of the most critical web application security risks
          </p>
          <Link to="/lab">
            <Button className="gap-2">
              <PlayCircle size={18} />
              Interactive Vulnerable Lab
            </Button>
          </Link>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Top 10 Security Risks</h2>
            {owaspTop10.map((risk) => (
              <RiskCard
                key={risk.id}
                risk={risk}
                isSelected={selectedRisk?.id === risk.id}
                onClick={handleRiskClick}
              />
            ))}
          </div>

          <div className="lg:col-span-2">
            {selectedRisk ? (
              <RiskDetail risk={selectedRisk} />
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8 max-w-md">
                  <ShieldAlert size={64} className="mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Select a Security Risk</h3>
                  <p className="text-muted-foreground">
                    Click on any of the OWASP Top 10 risks to view detailed information about its vulnerabilities and mitigation strategies.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>Based on OWASP Top 10:2021 - The Open Web Application Security Project</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
