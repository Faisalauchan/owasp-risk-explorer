
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { owaspTop10 } from '@/data/owaspData';
import { RiskCategory } from '@/types/owasp';
import { RiskCard } from '@/components/RiskCard';
import { RiskDetail } from '@/components/RiskDetail';
import { Button } from '@/components/ui/button';
import { ShieldAlert, PlayCircle, ExternalLink, Shield } from 'lucide-react';

const Index = () => {
  const [selectedRisk, setSelectedRisk] = useState<RiskCategory | null>(null);

  const handleRiskClick = (risk: RiskCategory) => {
    setSelectedRisk(risk);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 py-8 mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-security-accent/10 relative">
              <ShieldAlert size={52} className="text-security-accent animate-pulse-slow" />
              <div className="absolute inset-0 rounded-full bg-security-accent/5 animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-security-accent via-purple-600 to-security-high bg-clip-text text-transparent">
            OWASP Top 10 Risk Explorer
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Interactive visualization of the most critical web application security risks
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/lab">
              <Button className="gap-2 bg-security-accent hover:bg-security-accent/90">
                <PlayCircle size={18} />
                Interactive Vulnerable Lab
              </Button>
            </Link>
            
            <a href="https://owasp.org/Top10/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <ExternalLink size={18} />
                Official OWASP Top 10
              </Button>
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield size={20} className="text-security-accent" />
              <h2 className="text-2xl font-semibold">Top 10 Security Risks</h2>
            </div>
            
            <div className="p-3 bg-security-accent/5 border border-security-accent/20 rounded-lg mb-6 dark:bg-security-accent/10">
              <p className="text-sm text-security-accent/90 dark:text-security-accent/80">
                Click on any risk category to view detailed information, including common vulnerabilities and mitigation strategies.
              </p>
            </div>
            
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
              <div className="h-full flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8">
                <div className="text-center p-8 max-w-md">
                  <div className="p-6 rounded-full bg-gray-100 dark:bg-gray-800 mx-auto mb-6 w-24 h-24 flex items-center justify-center">
                    <ShieldAlert size={48} className="text-muted-foreground/50" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Select a Security Risk</h3>
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
          <div className="mt-2 flex justify-center gap-4">
            <a href="https://owasp.org/" target="_blank" rel="noopener noreferrer" className="text-security-accent hover:underline">OWASP.org</a>
            <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="text-security-accent hover:underline">Top 10 Project</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
