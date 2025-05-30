import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Flutter', level: 90, color: 'bg-burnt-sienna' },
    { name: 'Node.js', level: 85, color: 'bg-olive-green' },
    { name: 'Firebase', level: 80, color: 'bg-burnt-sienna' },
    { name: 'Dart', level: 88, color: 'bg-muted-purple' },
    { name: 'C', level: 80, color: 'bg-burnt-sienna' },
    { name: 'C++', level: 80, color: 'bg-olive-green' },
    { name: 'Python', level: 80, color: 'bg-burnt-sienna' },
    { name: 'MongoDB', level: 75, color: 'bg-olive-green' },
    { name: 'PostgreSQL', level: 82, color: 'bg-muted-purple' },
  ];

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Building cross-platform mobile applications using Flutter.',
      color: 'text-olive-green'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Creating responsive, modern web applications with the latest technologies.',
      color: 'text-burnt-sienna'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Designing scalable APIs and database architectures.',
      color: 'text-muted-purple'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment.',
      color: 'text-burnt-sienna'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
            About Me
          </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-7xl mx-auto">
            I'm a passionate developer building Flutter apps and crafting seamless user experiences through modern app and web technologies. I specialize in creating efficient, scalable, and innovative solutions for diverse challenges in the tech world. I love transforming ideas into functional, user-friendly mobile and web applications that solve real-world problems. I thrive on learning new technologies and continuously improving my skills to deliver the best possible results for my clients and users.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            {/* <div className="w-70 h-120 rounded-2xl shadow-xl flex items-center justify-center mb-8 lg:mb-16 animate-fade-in"> */}
              <div className="w-90 h-110 bg-white to-muted-purple rounded-full flex items-center justify-center text-white text-6xl font-bold border-4 border-burnt-sienna-200 shadow-lg">
                <img
                  src="/image.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          {/* </div> */}

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-charcoal-gray mb-6">
              My Journey
            </h3>
            <p className="text-charcoal-gray/80 leading-relaxed">
              I began my journey in Information Technology at Pimpri Chinchwad College of Engineering, Pune where I discovered a deep passion for building impactful digital solutions. Since then, I've focused on developing mobile and web apps using Flutter, delving into the world of Machine Learning to create intelligent systems, and honing my knowledge of databases, operating systems, and computer networks. This diverse skill set has enabled me to help projects evolve from ideas to polished, user-friendly experiences.
            </p>
            <p className="text-charcoal-gray/80 leading-relaxed">
              While Flutter is my core strength, I'm always exploring new technologies and improving my skills. Outside of coding, I enjoy diving into new frameworks and sharing insights with the developer community.
            </p>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-charcoal-gray mb-4">Skills & Technologies</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-charcoal-gray font-medium">{skill.name}</span>
                      <span className="text-charcoal-gray/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-pale-taupe rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-pale-taupe p-6 rounded-2xl shadow-xl hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${service.color} mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal-gray/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
