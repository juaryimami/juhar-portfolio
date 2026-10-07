import { Building2, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "ORBIT HEALTH, ETHIOPIA",
      position: "Senior Software Engineer",
      duration: "April, 2025 - Present",
      location: "On Site",
      descriptions: [
        "Accomplished design and implementation for back-end of and front end of projects.",
        "Acquired practical experience in requirement engineering.",
        "Integrate the existing EMR system with financial payment systems.",
        "Re-structured the architecture of the existing workflow and made it efficient."
      ],
      current: true
    },
    {
      company: "ASHEWA TECHNOLOGY, ETHIOPIA",
      position: "Software Engineer",
      duration: "August, 2023 - April 2025",
      location: "On Site",
      descriptions: [
        "Accomplished design and implementation for back-end of and front end of projects.",
        "Acquired practical experience in requirement engineering.",
        "Developed custom ERP solution using erpnext and odoo.",
        "Developed Over 6 giant customer projects."
      ],
      current: false
    },
    {
      company: "BPDO ADDIS ABABA, ETHIOPIA",
      position: "ERP Support Officer",
      duration: "September, 2023 - August, 2023",
      location: "Onsite",
      descriptions: [
        "Accomplished design and implementation for the existing ERP software.",
        "Acquired practical experience in requirement analysing.",
        "Customize over three modules for the existing product."
      ],
      current: false
    },
    {
      company: "JUUBIX LONDON, UK",
      position: "Junior Software Engineer",
      duration: "June, 2023 - August, 2023",
      location: "Remote",
      descriptions: [
        "Accomplished design and implementation for back-end of two projects.",
        "Acquired practical experience in requirement engineering.",
        "Successfully contributed in three projects on both frontend and backend."
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className={`gradient-card shadow-medium hover:shadow-strong transition-all duration-300 ${
                experience.current ? 'border-primary' : ''
              }`}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl lg:text-2xl text-foreground mb-2">
                      {experience.position}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-primary font-semibold">
                      <Building2 className="h-4 w-4" />
                      <span>{experience.company}</span>
                      {experience.current && (
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {experience.descriptions.map((description, descIndex) => (
                    <li key={descIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">
                        {description}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;