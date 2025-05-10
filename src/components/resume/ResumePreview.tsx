
import { useResume } from '@/contexts/ResumeContext';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import MinimalistTemplate from './templates/MinimalistTemplate';
import ModernTemplate from './templates/ModernTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { generatePDF } from '@/utils/helpers';

const ResumePreview = () => {
  const { state } = useResume();
  
  const handleDownload = () => {
    generatePDF('resume-container', `${state.personalInfo.fullName || 'Resume'}`);
  };

  const renderTemplate = () => {
    switch (state.template) {
      case 'professional':
        return <ProfessionalTemplate resume={state} />;
      case 'minimalist':
        return <MinimalistTemplate resume={state} />;
      case 'modern':
        return <ModernTemplate resume={state} />;
      case 'creative':
        return <CreativeTemplate resume={state} />;
      default:
        return <ProfessionalTemplate resume={state} />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <Button onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" /> Download PDF
        </Button>
      </div>
      <div className="flex-1 overflow-hidden">
        <div 
          id="resume-container" 
          className="resume-paper mx-auto max-w-[21cm] h-[29.7cm] shadow-lg"
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
