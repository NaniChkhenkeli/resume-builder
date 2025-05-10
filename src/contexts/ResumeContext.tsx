
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Resume, initialResumeState } from '@/types/resume';

type ResumeAction =
  | { type: 'SET_RESUME'; payload: Resume }
  | { type: 'UPDATE_PERSONAL_INFO'; payload: Partial<Resume['personalInfo']> }
  | { type: 'ADD_EDUCATION'; payload: Resume['education'][0] }
  | { type: 'UPDATE_EDUCATION'; payload: { id: string; data: Partial<Resume['education'][0]> } }
  | { type: 'REMOVE_EDUCATION'; payload: string }
  | { type: 'ADD_EXPERIENCE'; payload: Resume['experience'][0] }
  | { type: 'UPDATE_EXPERIENCE'; payload: { id: string; data: Partial<Resume['experience'][0]> } }
  | { type: 'REMOVE_EXPERIENCE'; payload: string }
  | { type: 'ADD_PROJECT'; payload: Resume['projects'][0] }
  | { type: 'UPDATE_PROJECT'; payload: { id: string; data: Partial<Resume['projects'][0]> } }
  | { type: 'REMOVE_PROJECT'; payload: string }
  | { type: 'ADD_SKILL'; payload: Resume['skills'][0] }
  | { type: 'REMOVE_SKILL'; payload: string }
  | { type: 'SET_TEMPLATE'; payload: 'professional' | 'minimalist' };

interface ResumeContextType {
  state: Resume;
  dispatch: React.Dispatch<ResumeAction>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

const resumeReducer = (state: Resume, action: ResumeAction): Resume => {
  switch (action.type) {
    case 'SET_RESUME':
      return action.payload;
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          ...action.payload
        }
      };
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [...state.education, action.payload]
      };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map(item => 
          item.id === action.payload.id ? { ...item, ...action.payload.data } : item
        )
      };
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        education: state.education.filter(item => item.id !== action.payload)
      };
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, action.payload]
      };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map(item => 
          item.id === action.payload.id ? { ...item, ...action.payload.data } : item
        )
      };
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter(item => item.id !== action.payload)
      };
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map(item => 
          item.id === action.payload.id ? { ...item, ...action.payload.data } : item
        )
      };
    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter(item => item.id !== action.payload)
      };
    case 'ADD_SKILL':
      return {
        ...state,
        skills: [...state.skills, action.payload]
      };
    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter(item => item.id !== action.payload)
      };
    case 'SET_TEMPLATE':
      return {
        ...state,
        template: action.payload
      };
    default:
      return state;
  }
};

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, initialResumeState, () => {
    const savedResume = localStorage.getItem('resume');
    return savedResume ? JSON.parse(savedResume) : initialResumeState;
  });

  useEffect(() => {
    localStorage.setItem('resume', JSON.stringify(state));
  }, [state]);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
