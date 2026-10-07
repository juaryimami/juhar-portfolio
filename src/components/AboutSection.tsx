import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey as a software developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Senior Software Developer
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With years of experience in software development, I've had the privilege 
              of working on diverse projects ranging from web applications to enterprise 
              ERP systems. My passion lies in creating efficient, scalable solutions 
              that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I specialize in modern web technologies including React, Vue.js, Node.js, 
              and Python. My experience with ERP systems like Odoo has given me deep 
              insights into business processes and how technology can streamline operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Addis Ababa, Ethiopia, I'm always excited to take on new 
              challenges and collaborate on innovative projects that make a meaningful impact.
            </p>
          </div>

          <div className="animate-slide-in-right">
            <Card className="gradient-card shadow-medium">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-foreground">
                  Contact Information
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:juharyimer7@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        juharyimer7@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:+251928355547"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +251 928 355 547
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;