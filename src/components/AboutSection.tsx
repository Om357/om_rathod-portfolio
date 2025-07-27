import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, user-centered interfaces and experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and with stakeholders'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text content */}
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated and results-oriented Software Engineer with a strong foundation in backend development, 
                currently pursuing my Bachelor's in Computer Engineering at LDRP-ITR. My journey in technology is driven 
                by a passion for understanding how complex systems work and a desire to build high-performance applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My professional experience at companies like InstaCloud Solutions and TatvaSoft has allowed me to bridge 
                academic theory with practical application. I've engineered RESTful APIs with role-based access control, 
                optimized PostgreSQL database queries to improve efficiency by over 30%, and thrived in Agile environments.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond my core skills in the Spring ecosystem, I am deeply interested in distributed systems and am 
                actively expanding my expertise in microservices architecture, event-driven communication with tools 
                like Kafka, and containerization with Docker.
              </p>
            </div>

            {/* Profile image placeholder */}
            <div className="relative animate-fade-in">
              <div className="w-full h-96 bg-gradient-card rounded-2xl shadow-medium flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code size={48} className="text-primary" />
                  </div>
                  <p className="text-sm">Om Rathod</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;