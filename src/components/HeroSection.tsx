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
      className="min-h-screen relative overflow-hidden flex flex-col justify-center"
    >
      {/* Background Image and Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10, 25, 47, 0.90)' }} 
      ></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10 py-20">
        <div className="max-w-5xl mx-auto animate-fade-in">
          
          {/* Hero Header */}
          <div className="mb-12">
            <h3 className="text-5xl md:text-7xl font-bold mb-6 text-slate-200 tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Om Rathod
              </span>
            </h3>
            
            <h2 className="text-2xl md:text-4xl font-light text-slate-300 mb-8">
              A passionate Java Developer eager to build scalable, real-world applications.
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8">
              From microservices to full-stack projects, I love turning complex ideas into clean, functional code.
              Hands-on with Spring Boot, Docker, REST APIs, and Agile workflows to build solid backend solutions.
              Curious by nature, quick to learn, and always ready to tackle new challenges with a detail-focused mindset.
            </p>

            {/* Location availability */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg px-8 py-4 inline-block">
              <p className="text-slate-300 text-lg">
                Currently open to full-time Software Engineer roles in{" "}
                <span className="text-white font-semibold">Ahmedabad</span>,{" "}
                <span className="text-white font-semibold">Gandhinagar</span> and{" "}
                <span className="text-white font-semibold">Pune</span>
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="w-full sm:w-auto px-10 py-5 text-lg font-semibold shadow-lg hover:shadow-xl">
                <a href="https://drive.google.com/file/d/1PEyOT1qRF-9H684WaFAA4n9IGakNjeLs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-3 h-6 w-6" />
                  View Resume
                </a>
              </Button>
              <Button variant="secondary" size="lg" onClick={() => scrollToSection('projects')} className="w-full sm:w-auto px-10 py-5 text-lg font-semibold">
                View My Work
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/Om357" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-110 p-2">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/omrathod357/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-110 p-2">
              <Linkedin size={32} />
            </a>
            <a href="mailto:om.rathod2004.or@gmail.com" className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-110 p-2">
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
        
      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-primary transition-all duration-300 animate-bounce hover:scale-110"
      >
        <ArrowDown size={36} />
      </button>
    </section>
  );
};


export default HeroSection;