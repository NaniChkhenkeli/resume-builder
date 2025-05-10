
import { useState } from 'react';
import { useResume } from '@/contexts/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Project } from '@/types/resume';
import { generateId } from '@/utils/helpers';
import { Plus, Trash } from 'lucide-react';

const ProjectsForm = () => {
  const { state, dispatch } = useResume();
  const { projects } = state;
  
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    technologies: '',
    link: ''
  });

  const handleAddProject = () => {
    const projectWithId = {
      ...newProject,
      id: generateId()
    };
    
    dispatch({
      type: 'ADD_PROJECT',
      payload: projectWithId
    });
    
    // Reset form
    setNewProject({
      title: '',
      description: '',
      technologies: '',
      link: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProject = (id: string, field: keyof Omit<Project, 'id'>, value: string) => {
    dispatch({
      type: 'UPDATE_PROJECT',
      payload: {
        id,
        data: { [field]: value }
      }
    });
  };

  const handleRemoveProject = (id: string) => {
    dispatch({
      type: 'REMOVE_PROJECT',
      payload: id
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Projects</h3>
      
      {projects.length > 0 && (
        <Accordion type="multiple" className="w-full">
          {projects.map((project) => (
            <AccordionItem value={project.id} key={project.id}>
              <AccordionTrigger className="text-left">
                <span>{project.title}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor={`title-${project.id}`}>Project Title</Label>
                    <Input
                      id={`title-${project.id}`}
                      value={project.title}
                      onChange={(e) => handleUpdateProject(project.id, 'title', e.target.value)}
                      placeholder="Project Name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`technologies-${project.id}`}>Technologies Used</Label>
                    <Input
                      id={`technologies-${project.id}`}
                      value={project.technologies}
                      onChange={(e) => handleUpdateProject(project.id, 'technologies', e.target.value)}
                      placeholder="React, Node.js, MongoDB, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`link-${project.id}`}>Project Link</Label>
                    <Input
                      id={`link-${project.id}`}
                      value={project.link}
                      onChange={(e) => handleUpdateProject(project.id, 'link', e.target.value)}
                      placeholder="https://github.com/yourusername/project"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`description-${project.id}`}>Description</Label>
                    <Textarea
                      id={`description-${project.id}`}
                      value={project.description}
                      onChange={(e) => handleUpdateProject(project.id, 'description', e.target.value)}
                      placeholder="Describe what your project does and your role in it"
                    />
                  </div>
                  
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => handleRemoveProject(project.id)}
                  >
                    <Trash className="h-4 w-4 mr-2" /> Remove
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
      
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Add Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              name="title"
              value={newProject.title}
              onChange={handleChange}
              placeholder="Project Name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="technologies">Technologies Used</Label>
            <Input
              id="technologies"
              name="technologies"
              value={newProject.technologies}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB, etc."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="link">Project Link</Label>
            <Input
              id="link"
              name="link"
              value={newProject.link}
              onChange={handleChange}
              placeholder="https://github.com/yourusername/project"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={newProject.description}
              onChange={handleChange}
              placeholder="Describe what your project does and your role in it"
            />
          </div>
          
          <Button onClick={handleAddProject} disabled={!newProject.title}>
            <Plus className="h-4 w-4 mr-2" /> Add Project
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsForm;
