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
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                Om Rathod
              </button>
              <p className="text-slate-300 mt-2">
                Java Developer & Software Engineer
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
                    className="p-3 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-slate-300">
              <p className="flex items-center justify-center md:justify-end">
                Made in {currentYear}
              </p>
              <p className="text-sm mt-1">
                © {currentYear} Om Rathod. All rights reserved.
              </p>
            </div>
          </div>

          {/* Bottom border */}
          <div className="mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
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
