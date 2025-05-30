import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    
    {
      title: 'Chat-R',
      description: 'A cross-platform real-time chat app using Flutter and Firebase.',
      tech: ['Flutter', 'Firebase', 'Dart'],
      image: '/images2.jpg',
      github: 'https://github.com/saurabhisane/Chat-R',
      demo: '',
      borderColor: 'border-olive-green'
    },
    {
      title: 'Portfolio Website',
      description: 'A clean and responsive portfolio showcasing projects, skills, and resume.',
      tech: ['react', 'Tailwind CSS','typescript'],
      image: '/images4.jpg',
      github: 'https://github.com/saurabhisane/my_portfolio',
      demo: 'https://saurabhisane.github.io/Portfolio-Website/',
      borderColor: 'border-muted-purple'
    },
    {
      title: 'To-Do List App',
      description: 'A minimal and intuitive app to manage daily tasks efficiently.',
      tech: ['React', 'JavaScript', 'CSS'],
      image: '/images5.jpg',
      github: 'https://github.com/saurabhisane/To-Do-List-App',
      demo: '',
      borderColor: 'border-burnt-sienna'
    },
    {
      title: 'Inventory Forecasting System',
      description: 'Forecasts future inventory needs using models like ARIMA and XGBoost.',
      tech: ['Python', 'Flask', 'Time Series', 'XGBoost'],
      image: '/images3.png',
      github: 'https://github.com/saurabhisane/Inventary-Forecast-System',
      demo: '',
      borderColor: 'border-muted-purple'
    },
    {
      title: 'Heart and Diabetes Prediction Model',
      description: 'Predicts the likelihood of heart disease and diabetes using machine learning based on health metrics.',
      tech: ['Python', 'Machine Learning', 'Jupyter Notebook'],
      image: '/images.jpg',
      github: 'https://github.com/saurabhisane/Heart-and-Diabetes-Prediction-model',
      demo: '',
      borderColor: 'border-burnt-sienna'
    },
    {
      title: 'SI Store',
      description: 'Flutter app for digital/physical product sales built for Smart India Hackathon.',
      tech: ['Flutter', 'Firebase', 'Dart'],
      image: '/images6.webp',
      github: 'https://github.com/saurabhisane/SI_Store',
      demo: '',
      borderColor: 'border-burnt-sienna'
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
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={20} className="text-charcoal-gray" />
                    </a>
                  )}
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
                      techIndex % 4 === 0
                        ? 'bg-burnt-sienna/20 text-burnt-sienna'
                        : techIndex % 4 === 1
                        ? 'bg-olive-green/20 text-olive-green'
                        : techIndex % 4 === 2
                        ? 'bg-muted-purple/20 text-muted-purple'
                        : 'bg-charcoal-gray/20 text-charcoal-gray'
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
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-charcoal-gray hover:text-burnt-sienna transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
