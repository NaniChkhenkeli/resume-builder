
import { Resume } from '@/types/resume';
import { formatDateRange } from '@/utils/helpers';

interface MinimalistTemplateProps {
  resume: Resume;
}

const MinimalistTemplate = ({ resume }: MinimalistTemplateProps) => {
  const { personalInfo, education, experience, projects, skills } = resume;

  return (
    <div className="font-sans text-gray-800 p-6">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-resume-header">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-xl text-resume-muted mt-1">
          {personalInfo.title || 'Professional Title'}
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-4 mt-3 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-4 mt-1 text-sm text-resume-primary">
          {personalInfo.website && <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">{personalInfo.website}</a>}
          {personalInfo.linkedIn && <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </div>
      </header>

      <div className="border-t border-gray-200 my-6"></div>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-sm">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium">{exp.position}</h3>
                <span className="text-xs text-gray-500">{formatDateRange(exp.startDate, exp.endDate)}</span>
              </div>
              <div className="flex justify-between items-baseline text-sm">
                <p>{exp.company}</p>
                <span className="text-xs text-gray-500">{exp.location}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600 whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium">{edu.degree} in {edu.field}</h3>
                <span className="text-xs text-gray-500">{formatDateRange(edu.startDate, edu.endDate)}</span>
              </div>
              <div className="flex justify-between items-baseline text-sm">
                <p>{edu.institution}</p>
                <span className="text-xs text-gray-500">{edu.location}</span>
              </div>
              {edu.description && (
                <p className="mt-1 text-xs text-gray-600">{edu.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <h3 className="font-medium">{project.title}</h3>
              {project.link && (
                <a href={project.link} className="text-resume-primary text-xs" target="_blank" rel="noopener noreferrer">
                  {project.link}
                </a>
              )}
              <p className="text-sm text-gray-600 mt-1">{project.description}</p>
              {project.technologies && (
                <p className="text-xs text-gray-500 mt-1">
                  <span className="font-medium">Technologies:</span> {project.technologies}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <p className="text-sm">
            {skills.map((skill, index) => (
              <span key={skill.id}>
                {skill.name}{index < skills.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </p>
        </section>
      )}
      
      <div className="border-t border-gray-200 my-6"></div>
      
      <footer className="text-center text-xs text-gray-400">
        Created with ResumeBuilder • {new Date().toLocaleDateString()}
      </footer>
    </div>
  );
};

export default MinimalistTemplate;
