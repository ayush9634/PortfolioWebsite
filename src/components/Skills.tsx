import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "GCP", "MySQL", "MongoDB", "VS Code"],
      color: "bg-accent-purple/10 text-accent-purple border-accent-purple/20"
    },
    {
      icon: Database,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Scikit-learn", "Pandas", "Streamlit"],
      color: "bg-success/10 text-success border-success/20"
    },
    {
      icon: Brain,
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "Machine Learning", "Operating Systems", "Networking", "Databases"],
      color: "bg-warning/10 text-warning border-warning/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build robust applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="card-hover hover-lift bg-card border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform cursor-default text-sm py-1 px-3`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Programming Languages", count: "6+" },
            { label: "Frameworks", count: "8+" },
            { label: "Tools & Platforms", count: "10+" },
            { label: "Years Learning", count: "3+" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-lg border border-border hover-lift"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.count}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;