
import { useState } from 'react';
import { useResume } from '@/contexts/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Experience } from '@/types/resume';
import { generateId } from '@/utils/helpers';
import { Plus, Trash } from 'lucide-react';

const ExperienceForm = () => {
  const { state, dispatch } = useResume();
  const { experience } = state;
  
  const [newExperience, setNewExperience] = useState<Omit<Experience, 'id'>>({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: ''
  });

  const handleAddExperience = () => {
    const experienceWithId = {
      ...newExperience,
      id: generateId()
    };
    
    dispatch({
      type: 'ADD_EXPERIENCE',
      payload: experienceWithId
    });
    
    // Reset form
    setNewExperience({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExperience(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateExperience = (id: string, field: keyof Omit<Experience, 'id'>, value: string) => {
    dispatch({
      type: 'UPDATE_EXPERIENCE',
      payload: {
        id,
        data: { [field]: value }
      }
    });
  };

  const handleRemoveExperience = (id: string) => {
    dispatch({
      type: 'REMOVE_EXPERIENCE',
      payload: id
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Work Experience</h3>
      
      {experience.length > 0 && (
        <Accordion type="multiple" className="w-full">
          {experience.map((exp) => (
            <AccordionItem value={exp.id} key={exp.id}>
              <AccordionTrigger className="text-left">
                <div className="flex flex-col items-start">
                  <span>{exp.position}</span>
                  <span className="text-sm text-muted-foreground">{exp.company}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`company-${exp.id}`}>Company</Label>
                      <Input
                        id={`company-${exp.id}`}
                        value={exp.company}
                        onChange={(e) => handleUpdateExperience(exp.id, 'company', e.target.value)}
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`position-${exp.id}`}>Position</Label>
                      <Input
                        id={`position-${exp.id}`}
                        value={exp.position}
                        onChange={(e) => handleUpdateExperience(exp.id, 'position', e.target.value)}
                        placeholder="Job Title"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`location-${exp.id}`}>Location</Label>
                      <Input
                        id={`location-${exp.id}`}
                        value={exp.location}
                        onChange={(e) => handleUpdateExperience(exp.id, 'location', e.target.value)}
                        placeholder="City, State"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                          <Input
                            id={`startDate-${exp.id}`}
                            type="month"
                            value={exp.startDate}
                            onChange={(e) => handleUpdateExperience(exp.id, 'startDate', e.target.value)}
                          />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                          <Input
                            id={`endDate-${exp.id}`}
                            type="month"
                            value={exp.endDate}
                            onChange={(e) => handleUpdateExperience(exp.id, 'endDate', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`description-${exp.id}`}>Description</Label>
                    <Textarea
                      id={`description-${exp.id}`}
                      value={exp.description}
                      onChange={(e) => handleUpdateExperience(exp.id, 'description', e.target.value)}
                      placeholder="Describe your responsibilities and achievements"
                    />
                  </div>
                  
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => handleRemoveExperience(exp.id)}
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
          <CardTitle className="text-base">Add Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={newExperience.company}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                name="position"
                value={newExperience.position}
                onChange={handleChange}
                placeholder="Job Title"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={newExperience.location}
                onChange={handleChange}
                placeholder="City, State"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="month"
                    value={newExperience.startDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="month"
                    value={newExperience.endDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={newExperience.description}
              onChange={handleChange}
              placeholder="Describe your responsibilities and achievements"
            />
          </div>
          
          <Button onClick={handleAddExperience} disabled={!newExperience.company || !newExperience.position}>
            <Plus className="h-4 w-4 mr-2" /> Add Experience
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceForm;
