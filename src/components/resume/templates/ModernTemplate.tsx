
import { Resume } from '@/types/resume';
import { formatDateRange } from '@/utils/helpers';

interface ModernTemplateProps {
  resume: Resume;
}

const ModernTemplate = ({ resume }: ModernTemplateProps) => {
  const { personalInfo, education, experience, projects, skills } = resume;

  return (
    <div className="font-sans text-gray-800 flex h-full">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-resume-accent text-white p-6">
        {/* Profile */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-1">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="text-sm opacity-90">{personalInfo.title || 'Professional Title'}</p>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b border-white/30 pb-2 mb-3">Contact</h2>
          <div className="space-y-2 text-sm">
            {personalInfo.email && (
              <div>
                <div className="font-medium">Email</div>
                <div className="opacity-90">{personalInfo.email}</div>
              </div>
            )}
            {personalInfo.phone && (
              <div>
                <div className="font-medium">Phone</div>
                <div className="opacity-90">{personalInfo.phone}</div>
              </div>
            )}
            {personalInfo.location && (
              <div>
                <div className="font-medium">Location</div>
                <div className="opacity-90">{personalInfo.location}</div>
              </div>
            )}
            {personalInfo.linkedIn && (
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="opacity-90">{personalInfo.linkedIn}</div>
              </div>
            )}
            {personalInfo.website && (
              <div>
                <div className="font-medium">Website</div>
                <div className="opacity-90">{personalInfo.website}</div>
              </div>
            )}
          </div>
        </div>

        {/* Skills Section */}
        {skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold border-b border-white/30 pb-2 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="bg-white/20 px-3 py-1 rounded-full text-xs"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Education Section (in sidebar) */}
        {education.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold border-b border-white/30 pb-2 mb-3">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4 text-sm">
                <h3 className="font-medium">{edu.degree} in {edu.field}</h3>
                <p className="opacity-90">{edu.institution}</p>
                <p className="text-xs opacity-75">{formatDateRange(edu.startDate, edu.endDate)}</p>
                {edu.location && <p className="text-xs opacity-75">{edu.location}</p>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6 bg-white">
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-resume-accent border-b border-resume-accent/20 pb-1 mb-3">Professional Summary</h2>
            <p className="text-sm">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-resume-accent border-b border-resume-accent/20 pb-1 mb-3">Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold">{exp.position}</h3>
                  <span className="text-xs text-gray-600">{formatDateRange(exp.startDate, exp.endDate)}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <p className="text-resume-accent text-sm">{exp.company}</p>
                  {exp.location && <span className="text-xs text-gray-600">{exp.location}</span>}
                </div>
                <p className="mt-1 text-sm text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-resume-accent border-b border-resume-accent/20 pb-1 mb-3">Projects</h2>
            {projects.map((project) => (
              <div key={project.id} className="mb-4">
                <h3 className="font-semibold">{project.title}</h3>
                {project.link && (
                  <a href={project.link} className="text-resume-accent text-xs" target="_blank" rel="noopener noreferrer">
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
      </div>
    </div>
  );
};

export default ModernTemplate;
