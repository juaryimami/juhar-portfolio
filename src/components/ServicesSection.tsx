import { Code, Server, Settings, Link, Database, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, user-friendly interfaces using modern frameworks like React and Vue.js",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Python, and Ruby on Rails",
    },
    {
      icon: Settings,
      title: "ERP Customization",
      description: "Customizing and extending Odoo ERP systems to fit specific business requirements",
    },
    {
      icon: Link,
      title: "API Integration",
      description: "Seamlessly connecting different systems through RESTful APIs and GraphQL",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database structures and managing data relationships",
    },
    {
      icon: Cloud,
      title: "DevOps",
      description: "Setting up CI/CD pipelines, cloud deployment, and infrastructure management",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="gradient-accent rounded-2xl p-8 shadow-medium text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="mb-6 opacity-90">
              Let's discuss how I can help bring your vision to life with the right technology stack.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;