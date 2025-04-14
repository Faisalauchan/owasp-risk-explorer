
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { owaspTop10 } from '@/data/owaspData';
import { RiskCategory, Vulnerability } from '@/types/owasp';
import { ChevronLeft, ShieldAlert, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SeverityBadge } from '@/components/SeverityBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VulnerabilityLabDemo } from '@/components/VulnerabilityLabDemo';

const VulnerableLab = () => {
  const navigate = useNavigate();
  const [selectedRisk, setSelectedRisk] = useState<RiskCategory | null>(null);
  const [selectedVulnerability, setSelectedVulnerability] = useState<Vulnerability | null>(null);
  
  const handleBackToOverview = () => {
    if (selectedVulnerability) {
      setSelectedVulnerability(null);
    } else if (selectedRisk) {
      setSelectedRisk(null);
    } else {
      navigate('/');
    }
  };
  
  const handleRiskSelect = (risk: RiskCategory) => {
    setSelectedRisk(risk);
    setSelectedVulnerability(null);
  };
  
  const handleVulnerabilitySelect = (vulnerability: Vulnerability) => {
    setSelectedVulnerability(vulnerability);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 py-8 mx-auto">
        <header className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4" 
            onClick={handleBackToOverview}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            {selectedVulnerability ? 'Back to Vulnerabilities' : selectedRisk ? 'Back to Categories' : 'Back to Overview'}
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <ShieldAlert size={32} className="text-security-accent" />
            <h1 className="text-3xl font-bold">OWASP Vulnerable Lab</h1>
          </div>
          <p className="text-muted-foreground">
            Interactive demonstrations of common web application vulnerabilities
          </p>
        </header>
        
        {!selectedRisk && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {owaspTop10.map(risk => (
              <Card 
                key={risk.id} 
                className="cursor-pointer hover:shadow-md transition-all duration-200"
                onClick={() => handleRiskSelect(risk)}
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
                  <p className="text-sm line-clamp-2 mb-4">{risk.description}</p>
                  <div className="flex justify-end">
                    <Button size="sm" className="gap-1">
                      <PlayCircle size={16} />
                      Explore Labs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {selectedRisk && !selectedVulnerability && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">{selectedRisk.name}</h2>
              <SeverityBadge severity={selectedRisk.severity} />
            </div>
            <p className="mb-6">{selectedRisk.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Available Vulnerability Labs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedRisk.vulnerabilities.map(vulnerability => (
                <Card 
                  key={vulnerability.id} 
                  className="cursor-pointer hover:shadow-md transition-all"
                  onClick={() => handleVulnerabilitySelect(vulnerability)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base font-medium">
                        {vulnerability.name}
                      </CardTitle>
                      <SeverityBadge severity={vulnerability.severity} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm line-clamp-2 mb-3">{vulnerability.description}</p>
                    <div className="flex justify-end">
                      <Button size="sm" className="gap-1">
                        <PlayCircle size={16} />
                        Launch Lab
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {selectedVulnerability && (
          <VulnerabilityLabDemo 
            vulnerability={selectedVulnerability} 
            riskCategory={selectedRisk!}
          />
        )}
      </div>
    </div>
  );
};

export default VulnerableLab;
