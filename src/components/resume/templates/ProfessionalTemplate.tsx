
import { Resume } from '@/types/resume';
import { formatDateRange } from '@/utils/helpers';

interface ProfessionalTemplateProps {
  resume: Resume;
}

const ProfessionalTemplate = ({ resume }: ProfessionalTemplateProps) => {
  const { personalInfo, education, experience, projects, skills } = resume;

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-resume-primary text-white p-6 mb-6">
        <h1 className="text-3xl font-bold">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-xl mt-1">{personalInfo.title || 'Professional Title'}</p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4 text-sm">
          {personalInfo.email && (
            <div>Email: {personalInfo.email}</div>
          )}
          {personalInfo.phone && (
            <div>Phone: {personalInfo.phone}</div>
          )}
          {personalInfo.location && (
            <div>Location: {personalInfo.location}</div>
          )}
          {personalInfo.website && (
            <div>Website: {personalInfo.website}</div>
          )}
          {personalInfo.linkedIn && (
            <div>LinkedIn: {personalInfo.linkedIn}</div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6 px-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Professional Summary</h2>
          <p>{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6 px-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-lg">{exp.position}</h3>
                <span className="text-sm text-gray-600">{formatDateRange(exp.startDate, exp.endDate)}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-resume-primary">{exp.company}</p>
                <span className="text-sm text-gray-600">{exp.location}</span>
              </div>
              <p className="mt-2 text-sm whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6 px-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold">{edu.degree} in {edu.field}</h3>
                <span className="text-sm text-gray-600">{formatDateRange(edu.startDate, edu.endDate)}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <p className="text-resume-primary">{edu.institution}</p>
                <span className="text-sm text-gray-600">{edu.location}</span>
              </div>
              {edu.description && (
                <p className="mt-1 text-sm">{edu.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6 px-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <h3 className="font-semibold">{project.title}</h3>
              {project.link && (
                <a href={project.link} className="text-resume-primary text-sm block mb-1" target="_blank" rel="noopener noreferrer">
                  {project.link}
                </a>
              )}
              <p className="text-sm mt-1">{project.description}</p>
              {project.technologies && (
                <p className="text-xs mt-1 text-gray-600">
                  <span className="font-medium">Technologies:</span> {project.technologies}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="px-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfessionalTemplate;
