import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Microservices Patient Management System',
      description: 'A distributed system with auth, patient, billing, and analytics services. Features secure JWT authentication, gRPC & REST communication, and an event-driven pipeline using Kafka for real-time analytics.',
      image: 'photo-1486312338219-ce68d2c6f44d',
      technologies: ['Spring Boot', 'Microservices', 'gRPC', 'Kafka', 'Docker', 'JWT'],
      liveUrl: '',
      githubUrl: 'https://github.com/Om357/Microservices-based-Patient-Management-System',
      featured: true
    },
    {
      title: 'QuizForge',
      description: 'A scalable backend for a full-featured online quiz platform. Implemented robust security with Spring Security & JWT, and designed a complex relational database schema optimized with Spring Data JPA.',
      image: 'photo-1461749280684-dccba630e2f6',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT'],
      liveUrl: '',
      githubUrl: 'https://github.com/Om357/QuizForge',
      featured: true
    },
    {
      title: 'A Hybrid ResNet-ViT for Skin Cancer Classification',
      description: 'A novel deep learning pipeline for 7-class skin lesion classification. The model achieved 97.89% accuracy and the research paper has been accepted by the IEEE 4th World Conference on AIC.',
      image: 'photo-1498050108023-c5249f4df085',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'ViT', 'ResNet'],
      liveUrl: '',
      githubUrl: 'https://github.com/Om357/Skin-Cancer-Classification-',
      featured: false
    },
    {
      title: 'E-Commerce Platform Backend',
      description: 'A robust RESTful API backend for an e-commerce platform. Features comprehensive CRUD operations for product and cart management, built on a clean Controller-Service-Repository architecture.',
      image: 'photo-1487058792275-0ad4aaf24ca7',
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'RESTful APIs'],
      liveUrl: '',
      githubUrl: 'https://github.com/Om357/E-Commerce-Web-Application',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid gap-8">
            {/* Featured projects - larger cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project image */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 pt-2">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary-hover transition-all duration-300"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Other projects - smaller cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  {/* Project image */}
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 pt-1">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-xs text-muted-foreground hover:text-primary transition-all duration-300"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* View more button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="https://github.com/Om357" target="_blank" rel="noopener noreferrer">
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
