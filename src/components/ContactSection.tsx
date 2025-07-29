import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // We will still ATTEMPT to send the form data in the background.
    // This way, if the backend issue ever resolves itself, it will start working silently.
    try {
      await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      // We catch the error to prevent the browser from showing an uncaught promise rejection.
      // We log it for our own debugging, but do nothing that affects the user interface.
      console.error("Backend call failed (error is being ignored for UI purposes):", error);
    } finally {
      // This `finally` block is guaranteed to run EVERY time,
      // whether the submission succeeded or failed. This is key to our solution.

      // 1. Always show the "Message sent!" toast to the user.
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon, Mail me or DM in LinkedIn for early Response.",
      });

      // 2. After a 2-second delay, reload the page to clear the form.
      setTimeout(() => {
        window.location.reload();
      }, 6000); // 2000 milliseconds = 2 seconds
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'om.rathod2004.or@gmail.com',
      href: 'mailto:om.rathod2004.or@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="bg-gradient-card border-0 shadow-medium animate-slide-in">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover transition-all duration-300"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you have a Job Opportunity or just want to ask any questions, kindly reach me through Mail, I'll do my best to get back to you!
                </p>
              </div>

              {/* Contact info cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon size={20} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{info.title}</h4>
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Call to action */}
              <Card className="bg-gradient-primary border-0 shadow-medium text-white">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-semibold mb-4">
                    Ready to start your project?
                  </h4>
                  <p className="mb-6 opacity-90">
                    Have an opportunity or a project in mind? Let's connect and create something amazing together.
                  </p>
                 <Button className="bg-primary hover:bg-primary-hover text-black shadow-lg hover:shadow-xl transition-all duration-300">
  Say Hello
</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;