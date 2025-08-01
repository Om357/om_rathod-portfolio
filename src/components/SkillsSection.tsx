import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        'Java', 'Spring Boot', 'Spring Security', 'Microservices', 'REST APIs',
        'Hibernate', 'Kafka', 'Python', 'PostgreSQL', 'MongoDB'
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
         'HTML5', 'CSS3', 'JavaScript'
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Git', 'GitHub', 'Docker', 'Maven', 'Postman', 'IntelliJ IDEA', 'VS Code'
      ]
    },
    {
      title: 'Concepts & Methodologies',
      skills: [
        'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms (DSA)', 
        'Agile', 'Scrum', 'RESTful Architecture', 'Machine Learning'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A practical skillset tailored for building modern, high-performance backend solutions.           
             </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-x1 font-semibold text-foreground flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300
                         cursor-default text-base px-4 py-2"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: '4+', label: 'Major Projects' },
              { number: '6 Months', label: 'Professional Experience' },
              { number: '95%', label: 'Code Reliability' },
              { number: '15+', label: 'Tech Stack Skills' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;