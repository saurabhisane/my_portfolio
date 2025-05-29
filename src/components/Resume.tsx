
import { Download, GraduationCap, Calendar, Award } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2018-2022",
      cgpa: "8.5/10",
      description: "Specialized in Software Engineering and Web Development"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "St. Mary's College",
      year: "2016-2018",
      percentage: "92%",
      description: "Science Stream with Computer Science"
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB."
    },
    {
      role: "Frontend Developer Intern",
      company: "StartupXYZ",
      period: "2021 - 2022",
      description: "Built responsive user interfaces and collaborated with design teams."
    }
  ];

  const handleDownloadResume = () => {
    // For now, we'll simulate the download. In a real app, this would call your backend
    console.log('Downloading resume...');
    // Example: window.open('/api/resume/download', '_blank');
    
    // Temporary simulation
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'john-doe-resume.pdf';
    link.click();
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
            Resume & Education
          </h2>
          <p className="text-lg text-charcoal-gray/70 max-w-3xl mx-auto mb-8">
            My academic journey and professional experience in the field of technology.
          </p>
          
          <button
            onClick={handleDownloadResume}
            className="bg-burnt-sienna text-white px-8 py-4 rounded-full font-semibold hover-lift shadow-lg flex items-center space-x-2 mx-auto"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal-gray mb-8 flex items-center space-x-2">
              <GraduationCap className="text-burnt-sienna" />
              <span>Education</span>
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="bg-pale-taupe p-6 rounded-2xl shadow-lg hover-lift animate-slide-in-left border-l-4 border-olive-green"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-charcoal-gray text-lg">{edu.degree}</h4>
                      <p className="text-olive-green font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-charcoal-gray/70 text-sm mb-1">
                        <Calendar size={14} className="mr-1" />
                        {edu.year}
                      </div>
                      <div className="flex items-center text-burnt-sienna font-semibold">
                        <Award size={14} className="mr-1" />
                        {edu.cgpa || edu.percentage}
                      </div>
                    </div>
                  </div>
                  <p className="text-charcoal-gray/70">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal-gray mb-8">
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={exp.role}
                  className="bg-pale-taupe p-6 rounded-2xl shadow-lg hover-lift animate-slide-in-left border-l-4 border-muted-purple"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-3">
                    <h4 className="font-bold text-charcoal-gray text-lg">{exp.role}</h4>
                    <p className="text-muted-purple font-medium">{exp.company}</p>
                    <div className="flex items-center text-charcoal-gray/70 text-sm mt-1">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-charcoal-gray/70">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
