
import { Resume } from '@/types/resume';
import { formatDateRange } from '@/utils/helpers';

interface CreativeTemplateProps {
  resume: Resume;
}

const CreativeTemplate = ({ resume }: CreativeTemplateProps) => {
  const { personalInfo, education, experience, projects, skills } = resume;

  return (
    <div className="font-sans text-gray-800">
      {/* Header with accent background */}
      <header className="bg-gradient-to-r from-resume-primary to-resume-accent text-white p-8 relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="text-xl mt-1 opacity-90">{personalInfo.title || 'Professional Title'}</p>
          
          {/* Contact info in a grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6 text-sm">
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
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ 
          clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)" 
        }}></div>
      </header>

      <main className="p-8 pt-2 max-w-3xl mx-auto">
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-resume-primary inline-block pb-1 mb-3 relative">
              About Me
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-resume-accent"></span>
            </h2>
            <p className="text-gray-700">{personalInfo.summary}</p>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-resume-primary inline-block pb-1 mb-4 relative">
              Skills
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-resume-accent"></span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="bg-gray-100 border border-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-resume-primary inline-block pb-1 mb-4 relative">
              Experience
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-resume-accent"></span>
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-lg text-resume-primary">{exp.position}</h3>
                  <span className="text-sm text-gray-600">{formatDateRange(exp.startDate, exp.endDate)}</span>
                </div>
                <div className="flex flex-wrap justify-between items-baseline">
                  <p className="font-medium">{exp.company}</p>
                  {exp.location && <span className="text-sm text-gray-600">{exp.location}</span>}
                </div>
                <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-resume-primary inline-block pb-1 mb-4 relative">
              Education
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-resume-accent"></span>
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold">{edu.degree} in {edu.field}</h3>
                  <span className="text-sm text-gray-600">{formatDateRange(edu.startDate, edu.endDate)}</span>
                </div>
                <div className="flex flex-wrap justify-between items-baseline">
                  <p className="text-resume-primary">{edu.institution}</p>
                  {edu.location && <span className="text-sm text-gray-600">{edu.location}</span>}
                </div>
                {edu.description && (
                  <p className="mt-1 text-sm text-gray-700">{edu.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-resume-primary inline-block pb-1 mb-4 relative">
              Projects
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-resume-accent"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-resume-primary">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="text-blue-600 text-sm block mb-2" target="_blank" rel="noopener noreferrer">
                      {project.link}
                    </a>
                  )}
                  <p className="text-sm">{project.description}</p>
                  {project.technologies && (
                    <p className="text-xs mt-2 text-gray-600">
                      <span className="font-medium">Technologies:</span> {project.technologies}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default CreativeTemplate;
