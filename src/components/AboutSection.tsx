// src/components/AboutSection.tsx
import { Cpu, Code, Lightbulb, CheckCircle } from 'lucide-react';
import profilePhoto from '@/assets/profile_photo.png'; // Your photo

const AboutSection = () => {
  return (
    <section id="about" className="pt-20 md:pt-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ... Your existing left and right columns (narrative and photo) go here ... */}
          {/* === Left Column: The Narrative === */}
          <div className="text-lg text-slate-400 space-y-6">
            <p>
              [**YOUR PARAGRAPH 1 HERE.**]
            </p>
            <p>
              [**YOUR PARAGRAPH 2 HERE.**]
            </p>
            <p className="text-slate-300 font-semibold">Here are a few technologies I’ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" /> Java & Spring Boot</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" /> Microservices</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" /> PostgreSQL</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" /> Hibernate</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" /> Docker</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" /> Kafka</li>
            </ul>
          </div>
          {/* === Right Column: The Visuals === */}
          <div className="space-y-8">
            <div className="group relative w-full max-w-sm mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img src={profilePhoto} alt="Om Rathod" className="relative w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-card p-4 rounded-lg"><Cpu size={28} className="mx-auto mb-2 text-primary" /><h4 className="font-semibold text-slate-200">Scalable Architecture</h4></div>
              <div className="bg-card p-4 rounded-lg"><Code size={28} className="mx-auto mb-2 text-primary" /><h4 className="font-semibold text-slate-200">Clean Code</h4></div>
              <div className="bg-card p-4 rounded-lg"><Lightbulb size={28} className="mx-auto mb-2 text-primary" /><h4 className="font-semibold text-slate-200">Problem Solving</h4></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ADD THE NEW MARQUEE COMPONENT HERE */}
      {/* <TechMarquee /> */}

    </section>
  );
};

export default AboutSection;