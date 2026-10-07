const SkillsSection = () => {
  const skills = [
    { name: "HTML", category: "Frontend", level: 95, color: "primary" },
    { name: "CSS", category: "Frontend", level: 90, color: "primary" },
    { name: "JavaScript", category: "Frontend", level: 92, color: "primary" },
    { name: "Vue.js", category: "Frontend", level: 88, color: "primary" },
    { name: "React", category: "Frontend", level: 85, color: "primary" },
    { name: "Python", category: "Backend", level: 90, color: "secondary" },
    { name: "Node.js", category: "Backend", level: 87, color: "secondary" },
    { name: "GraphQL", category: "Backend", level: 82, color: "secondary" },
    { name: "Ruby on Rails", category: "Backend", level: 80, color: "secondary" },
    { name: "Odoo", category: "ERP", level: 93, color: "accent" },
    { name: "ERPNext", category: "ERP", level: 85, color: "accent" },
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => {
            const categoryColor = category === "Frontend" ? "primary" : category === "Backend" ? "secondary" : "accent";
            return (
              <div
                key={category}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="gradient-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 h-full">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${categoryColor} flex items-center justify-center shadow-medium`}>
                      <div className="text-2xl font-bold text-white">
                        {category === "Frontend" ? "⚡" : category === "Backend" ? "⚙️" : "🏢"}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {category}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-skills mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="animate-fade-in"
                        style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`bg-gradient-skills h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(index * 0.3) + (skillIndex * 0.2)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Highlight */}
        <div className="mt-16 text-center">
          <div className="gradient-card rounded-2xl p-8 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Always Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I believe in continuous learning. 
              I stay updated with the latest trends and best practices in software 
              development to deliver cutting-edge solutions that meet modern standards 
              and user expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;