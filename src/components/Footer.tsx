
import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-gray text-desert-sand py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-desert-sand/70 leading-relaxed">
              Full Stack Developer passionate about creating amazing web experiences 
              and solving complex problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-desert-sand/70 hover:text-burnt-sienna transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-desert-sand/70 hover:text-burnt-sienna transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-desert-sand/70 hover:text-burnt-sienna transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-desert-sand/70 hover:text-burnt-sienna transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:john@example.com"
                className="flex items-center space-x-2 text-desert-sand/70 hover:text-burnt-sienna transition-colors"
              >
                <Mail size={16} />
                <span>john@example.com</span>
              </a>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-desert-sand/70 hover:text-burnt-sienna transition-colors"
              >
                <Github size={16} />
                <span>github.com/johndoe</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-desert-sand/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-desert-sand/70 mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-desert-sand/70">
            <span>Made with</span>
            <Heart size={16} className="text-burnt-sienna fill-current" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
