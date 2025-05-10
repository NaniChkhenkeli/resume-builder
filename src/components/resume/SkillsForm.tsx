
import { useState } from 'react';
import { useResume } from '@/contexts/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { generateId } from '@/utils/helpers';
import { X, Plus } from 'lucide-react';

const SkillsForm = () => {
  const { state, dispatch } = useResume();
  const { skills } = state;
  
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() === '') return;
    
    dispatch({
      type: 'ADD_SKILL',
      payload: {
        id: generateId(),
        name: newSkill.trim()
      }
    });
    
    setNewSkill('');
  };

  const handleRemoveSkill = (id: string) => {
    dispatch({
      type: 'REMOVE_SKILL',
      payload: id
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Skills</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label htmlFor="skill">Add a Skill</Label>
            <div className="flex mt-1">
              <Input
                id="skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="JavaScript, React, Project Management, etc."
                className="rounded-r-none"
              />
              <Button 
                onClick={handleAddSkill} 
                className="rounded-l-none"
                disabled={newSkill.trim() === ''}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map(skill => (
            <div 
              key={skill.id} 
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full flex items-center gap-1"
            >
              <span>{skill.name}</span>
              <button 
                onClick={() => handleRemoveSkill(skill.id)}
                className="text-secondary-foreground/70 hover:text-secondary-foreground rounded-full"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
