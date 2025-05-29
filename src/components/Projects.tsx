
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center',
      github: 'https://github.com/johndoe/ecommerce',
      demo: 'https://ecommerce-demo.com',
      borderColor: 'border-burnt-sienna'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team chat, and progress tracking.',
      tech: ['Next.js', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center',
      github: 'https://github.com/johndoe/taskmanager',
      demo: 'https://taskmanager-demo.com',
      borderColor: 'border-olive-green'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      tech: ['React', 'Weather API', 'Chart.js', 'PWA'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center',
      github: 'https://github.com/johndoe/weather',
      demo: 'https://weather-demo.com',
      borderColor: 'border-muted-purple'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media managers with engagement metrics, content scheduling, and reports.',
      tech: ['Vue.js', 'Express.js', 'Redis', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      github: 'https://github.com/johndoe/analytics',
      demo: 'https://analytics-demo.com',
      borderColor: 'border-burnt-sienna'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, video streaming, quizzes, and progress tracking.',
      tech: ['React', 'Django', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center',
      github: 'https://github.com/johndoe/lms',
      demo: 'https://lms-demo.com',
      borderColor: 'border-olive-green'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness application with workout plans, nutrition tracking, and social features.',
      tech: ['React Native', 'Firebase', 'Redux', 'Charts'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&crop=center',
      github: 'https://github.com/johndoe/fitness',
      demo: 'https://fitness-demo.com',
      borderColor: 'border-muted-purple'
    }
  ];

  return (
    <section className="py-20 px-6 bg-pale-taupe/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-charcoal-gray/70 max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card p-6 animate-scale-in ${project.borderColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal-gray/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={20} className="text-charcoal-gray" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={20} className="text-charcoal-gray" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-charcoal-gray mb-3">
                {project.title}
              </h3>
              <p className="text-charcoal-gray/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`skill-badge ${
                      techIndex % 4 === 0 ? 'bg-burnt-sienna/20 text-burnt-sienna' :
                      techIndex % 4 === 1 ? 'bg-olive-green/20 text-olive-green' :
                      techIndex % 4 === 2 ? 'bg-muted-purple/20 text-muted-purple' :
                      'bg-charcoal-gray/20 text-charcoal-gray'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-charcoal-gray hover:text-burnt-sienna transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-charcoal-gray hover:text-burnt-sienna transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
