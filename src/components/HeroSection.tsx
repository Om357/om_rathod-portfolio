import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Om Rathod
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
            Software Engineer | Backend & Microservices Specialist
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-blue-50 max-w-2xl mx-auto leading-relaxed">
            I build robust and scalable backend systems using Java, Spring Boot, and modern cloud technologies.
            Passionate about architecting efficient microservices and writing clean code to solve complex, real-world problems.
          </p>
          
          {/* Action buttons */}
          <div className="flex justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-white text-primary hover:bg-blue-50 hover:shadow-glow transition-all duration-300 font-semibold px-8 py-3"
            >
              See My Projects
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/Om357"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/omrathod357/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:om.rathod2004.or@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-200 transition-colors duration-300 animate-float"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;