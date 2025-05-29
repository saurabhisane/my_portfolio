
import { ArrowDown, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal-gray mb-6">
            Hi, I'm{' '}
            <span className="text-burnt-sienna">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-charcoal-gray/80 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-charcoal-gray/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            I create beautiful, responsive web applications using modern technologies. 
            Passionate about clean code, user experience, and turning ideas into reality.
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
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-gray hover:text-burnt-sienna transition-colors duration-300"
            >
              <Github size={32} />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-charcoal-gray hover:text-burnt-sienna transition-colors duration-300"
            >
              <Mail size={32} />
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
