
import { useState } from 'react';
import { useResume } from '@/contexts/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Education } from '@/types/resume';
import { generateId } from '@/utils/helpers';
import { Plus, Trash } from 'lucide-react';

const EducationForm = () => {
  const { state, dispatch } = useResume();
  const { education } = state;
  
  const [newEducation, setNewEducation] = useState<Omit<Education, 'id'>>({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    location: '',
    description: ''
  });

  const handleAddEducation = () => {
    const educationWithId = {
      ...newEducation,
      id: generateId()
    };
    
    dispatch({
      type: 'ADD_EDUCATION',
      payload: educationWithId
    });
    
    // Reset form
    setNewEducation({
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateEducation = (id: string, field: keyof Omit<Education, 'id'>, value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: {
        id,
        data: { [field]: value }
      }
    });
  };

  const handleRemoveEducation = (id: string) => {
    dispatch({
      type: 'REMOVE_EDUCATION',
      payload: id
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Education</h3>
      
      {education.length > 0 && (
        <Accordion type="multiple" className="w-full">
          {education.map((edu) => (
            <AccordionItem value={edu.id} key={edu.id}>
              <AccordionTrigger className="text-left">
                <div className="flex flex-col items-start">
                  <span>{edu.institution}</span>
                  <span className="text-sm text-muted-foreground">{edu.degree} in {edu.field}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                      <Input
                        id={`institution-${edu.id}`}
                        value={edu.institution}
                        onChange={(e) => handleUpdateEducation(edu.id, 'institution', e.target.value)}
                        placeholder="University/School Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`location-${edu.id}`}>Location</Label>
                      <Input
                        id={`location-${edu.id}`}
                        value={edu.location}
                        onChange={(e) => handleUpdateEducation(edu.id, 'location', e.target.value)}
                        placeholder="City, State"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                      <Input
                        id={`degree-${edu.id}`}
                        value={edu.degree}
                        onChange={(e) => handleUpdateEducation(edu.id, 'degree', e.target.value)}
                        placeholder="Bachelor's, Master's, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`field-${edu.id}`}>Field of Study</Label>
                      <Input
                        id={`field-${edu.id}`}
                        value={edu.field}
                        onChange={(e) => handleUpdateEducation(edu.id, 'field', e.target.value)}
                        placeholder="Computer Science"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`startDate-${edu.id}`}>Start Date</Label>
                      <Input
                        id={`startDate-${edu.id}`}
                        type="month"
                        value={edu.startDate}
                        onChange={(e) => handleUpdateEducation(edu.id, 'startDate', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`endDate-${edu.id}`}>End Date</Label>
                      <Input
                        id={`endDate-${edu.id}`}
                        type="month"
                        value={edu.endDate}
                        onChange={(e) => handleUpdateEducation(edu.id, 'endDate', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`description-${edu.id}`}>Description</Label>
                    <Textarea
                      id={`description-${edu.id}`}
                      value={edu.description}
                      onChange={(e) => handleUpdateEducation(edu.id, 'description', e.target.value)}
                      placeholder="Relevant coursework, achievements, GPA, etc."
                    />
                  </div>
                  
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => handleRemoveEducation(edu.id)}
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
          <CardTitle className="text-base">Add Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="institution">Institution</Label>
              <Input
                id="institution"
                name="institution"
                value={newEducation.institution}
                onChange={handleChange}
                placeholder="University/School Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={newEducation.location}
                onChange={handleChange}
                placeholder="City, State"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree</Label>
              <Input
                id="degree"
                name="degree"
                value={newEducation.degree}
                onChange={handleChange}
                placeholder="Bachelor's, Master's, etc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="field">Field of Study</Label>
              <Input
                id="field"
                name="field"
                value={newEducation.field}
                onChange={handleChange}
                placeholder="Computer Science"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                name="startDate"
                type="month"
                value={newEducation.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                name="endDate"
                type="month"
                value={newEducation.endDate}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={newEducation.description}
              onChange={handleChange}
              placeholder="Relevant coursework, achievements, GPA, etc."
            />
          </div>
          
          <Button onClick={handleAddEducation} disabled={!newEducation.institution || !newEducation.degree}>
            <Plus className="h-4 w-4 mr-2" /> Add Education
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationForm;
