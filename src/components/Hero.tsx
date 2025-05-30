
import { ArrowDown, Github, Mail, Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Provide the PDF document locally
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // Update this path to the correct location of your PDF file
    link.download = 'saurabhisane.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-40">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-7xl md:text-7xl font-bold text-charcoal-gray mb-6">
            Hi, I'm{' '}
            <span className="text-burnt-sienna">Saurabh Isane</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-charcoal-gray/80 mb-8">
            Flutter Developer
          </h2>
          <p className="text-lg md:text-xl text-charcoal-gray/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          I build beautiful, high-performance mobile and web applications using Flutter. Passionate about clean code, intuitive user interfaces, and turning creative ideas into smooth, cross-platform experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#contact"
              className="bg-burnt-sienna text-white px-8 py-4 rounded-full font-semibold hover-lift shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-burnt-sienna text-burnt-sienna px-8 py-4 rounded-full font-semibold hover:bg-burnt-sienna hover:text-white transition-all duration-300"
            >
              View My Work
            </a>
            <button
              onClick={handleDownloadResume}
              className="bg-burnt-sienna   text-white px-8 py-4 rounded-full font-semibold hover-lift shadow-lg flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/saurabhisane/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-gray hover:text-burnt-sienna transition-colors duration-300"
            >
              <Github size={32} />
            </a>
            <a
              href="mailto:isanesaurabh@gmail.com"
              className="text-charcoal-gray hover:text-burnt-sienna transition-colors duration-300"
            >
              <Mail size={32} />
            </a>
            <a
              href="https://www.instagram.com/saurabh_isane/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-gray hover:text-burnt-sienna transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9a4.5 4.5 0 01-4.5-4.5v-9A4.5 4.5 0 017.5 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 7.5h.008v.008H16.5V7.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/saurabh-isane-479a0a257/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-gray hover:text-burnt-sienna transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75h-9a3.75 3.75 0 00-3.75 3.75v9a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75v-9a3.75 3.75 0 00-3.75-3.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9.75v6.75M8.25 7.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 9.75v6.75m0-3.375h3.375"
                />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/insane77/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-gray hover:text-burnt-sienna transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.75l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.75v16.5"
                />
              </svg>
            </a>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="text-charcoal-gray/60 hover:text-burnt-sienna transition-colors">
              <ArrowDown size={32} className="mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
