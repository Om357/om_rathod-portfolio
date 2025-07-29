// src/components/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg'; // Assuming you still want to use this image

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
    >
      {/* Background Image and Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div 
        // This overlay is the key to making the image transparent and fitting the dark theme
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10, 25, 47, 0.90)' }} 
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          
          {/* Main heading - adapted for the new theme */}
          <h3 className="text-5xl md:text-6xl font-bold mb-6 text-slate-200">
            Hi, I'm{' '}
            <span className="text-white">
              Om Rathod
            </span>
          </h3>
          
          {/* Subtitle - adapted for the new theme */}
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-slate-300">
             A passionalte Java Developer eager to build scalable, real-world applications.
          </h2>
          
          {/* Description - adapted for the new theme */}
          <p className="text-lg md:text-xl mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From microservices to full-stack projects, I love turning complex ideas into clean, functional code.
Hands-on with Spring Boot, Docker, REST APIs, and Agile workflows to build solid backend solutions.
Curious by nature, quick to learn, and always ready to tackle new challenges with a detail-focused mindset
          </p>

          {/* NEW: Job seeking statement */}
          {/* <p className="text-md mb-10 text-slate-400 max-w-2xl mx-auto">
            Currently open to full-time Software Engineer roles in Ahmedabad, Gandhinagar, or Pune — let's build something impactful together.


          </p> */}
          <p className="text-white mb-10 text-slate-400 max-w-3xl mx-auto">
  Currently open to full-time Software Engineer roles in{" "}
  <span className="text-lg text-white font-semibold">Ahmedabad</span>,{" "}
  <span className="text-lg text-white font-semibold">Gandhinagar</span> and{" "}
  <span className="text-lg text-white font-semibold">Pune</span> — let's build something impactful together.
</p>

          
          {/* Action buttons - UPDATED */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="https://drive.google.com/file/d/1PEyOT1qRF-9H684WaFAA4n9IGakNjeLs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                My Resume
              </a>
            </Button>
            <Button variant="secondary" size="lg" onClick={() => scrollToSection('projects')} className="w-full sm:w-auto">
              My Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Social links - adapted for the new theme */}
          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/Om357" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/omrathod357/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:om.rathod2004.or@gmail.com" className="text-slate-400 hover:text-primary transition-transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator - adapted for the new theme */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;