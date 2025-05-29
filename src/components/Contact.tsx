
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'john@example.com',
      href: 'mailto:john@example.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-charcoal-gray/70 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you. 
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-charcoal-gray mb-8">
              Let's Connect
            </h3>
            
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="flex items-center space-x-4 p-6 bg-pale-taupe rounded-2xl shadow-lg hover-lift animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-burnt-sienna">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray">{info.title}</h4>
                  <a
                    href={info.href}
                    className="text-charcoal-gray/70 hover:text-burnt-sienna transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}

            <div className="mt-12">
              <h4 className="font-semibold text-charcoal-gray mb-4">
                Why Work With Me?
              </h4>
              <ul className="space-y-3 text-charcoal-gray/70">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-burnt-sienna rounded-full"></div>
                  <span>5+ years of professional experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-olive-green rounded-full"></div>
                  <span>Fast turnaround and reliable communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-muted-purple rounded-full"></div>
                  <span>Clean, maintainable, and scalable code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-burnt-sienna rounded-full"></div>
                  <span>Post-launch support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-charcoal-gray font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-pale-taupe rounded-lg focus:border-olive-green focus:outline-none transition-colors bg-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-charcoal-gray font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-pale-taupe rounded-lg focus:border-olive-green focus:outline-none transition-colors bg-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-charcoal-gray font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-pale-taupe rounded-lg focus:border-olive-green focus:outline-none transition-colors bg-white resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-burnt-sienna text-white py-4 px-6 rounded-lg font-semibold hover-lift shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
