import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A comprehensive data visualization platform built with React and D3.js, featuring real-time analytics and interactive charts for business intelligence.",
      image: project1,
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Mobile App",
      description: "Modern shopping application with seamless user experience, payment integration, and inventory management built with React Native and Node.js backend.",
      image: project2,
      technologies: ["React Native", "Node.js", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Enterprise ERP System",
      description: "Custom Odoo implementation for manufacturing company, including inventory management, production planning, and financial reporting modules.",
      image: project3,
      technologies: ["Odoo", "Python", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "API Gateway Platform",
      description: "Microservices API gateway with authentication, rate limiting, and documentation, built with Node.js and deployed on AWS infrastructure.",
      image: project4,
      technologies: ["Node.js", "GraphQL", "AWS", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "DevOps Monitoring Dashboard",
      description: "Real-time infrastructure monitoring solution with alerting system, built with Vue.js frontend and Python backend for system metrics tracking.",
      image: project5,
      technologies: ["Vue.js", "Python", "Docker", "Prometheus"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent projects demonstrating my expertise across different technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="project-card group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white"
                    asChild
                  >
                    <a href={project.liveUrl} aria-label="View live project">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white"
                    asChild
                  >
                    <a href={project.githubUrl} aria-label="View source code">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="#contact">Let's Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;