import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Om357',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/omrathod357/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:om.rathod2004.or@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                Om Rathod
              </button>
              <p className="text-gray-300 mt-2">
                Software Engineer
              </p>
            </div>

            {/* Social links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-gray-300">
              <p className="flex items-center justify-center md:justify-end">
                Made with <Heart size={16} className="mx-1 text-red-400" /> in {currentYear}
              </p>
              <p className="text-sm mt-1">
                © {currentYear} Om Rathod. All rights reserved.
              </p>
            </div>
          </div>

          {/* Bottom border */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>
              Designed & Built by Om Rathod
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;