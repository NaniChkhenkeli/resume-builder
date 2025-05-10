
import { useState } from 'react';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PersonalInfoForm from '@/components/resume/PersonalInfoForm';
import EducationForm from '@/components/resume/EducationForm';
import ExperienceForm from '@/components/resume/ExperienceForm';
import ProjectsForm from '@/components/resume/ProjectsForm';
import SkillsForm from '@/components/resume/SkillsForm';
import TemplateSelector from '@/components/resume/TemplateSelector';
import ResumePreview from '@/components/resume/ResumePreview';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState('personal-info');
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-6">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>
          
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[800px] rounded-lg border bg-card shadow"
          >
            <ResizablePanel defaultSize={50} minSize={30} className="p-6 overflow-y-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-6">
                  <TabsTrigger value="personal-info">Personal</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="template">Template</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal-info">
                  <PersonalInfoForm />
                </TabsContent>
                
                <TabsContent value="education">
                  <EducationForm />
                </TabsContent>
                
                <TabsContent value="experience">
                  <ExperienceForm />
                </TabsContent>
                
                <TabsContent value="projects">
                  <ProjectsForm />
                </TabsContent>
                
                <TabsContent value="skills">
                  <SkillsForm />
                </TabsContent>
                
                <TabsContent value="template">
                  <TemplateSelector />
                </TabsContent>
              </Tabs>
            </ResizablePanel>
            
            <ResizableHandle className="bg-border" />
            
            <ResizablePanel defaultSize={50} minSize={30} className="bg-muted">
              <div className="h-full p-6">
                <ResumePreview />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;
