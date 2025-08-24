import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Artificial Intelligence & Machine Learning",
      institution: "University/College Name",
      duration: "2021 - 2025",
      status: "Pursuing",
      description: "Focused on AI/ML fundamentals, data structures, algorithms, and modern software development practices.",
      highlights: ["Machine Learning", "Deep Learning", "Data Science", "Software Engineering"]
    },
    {
      degree: "Higher Secondary Education",
      field: "Science (PCM)",
      institution: "High School Name",
      duration: "2019 - 2021",
      status: "Completed",
      description: "Strong foundation in Mathematics, Physics, and Computer Science.",
      highlights: ["Mathematics", "Physics", "Computer Science", "Problem Solving"]
    },
    {
      degree: "Secondary Education",
      field: "General Studies",
      institution: "School Name",
      duration: "2017 - 2019",
      status: "Completed",
      description: "Comprehensive education with focus on analytical thinking and foundational concepts.",
      highlights: ["Academic Excellence", "Leadership", "Extracurricular Activities"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in computer science and artificial intelligence through continuous learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-primary/30 hidden sm:block" />
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden sm:block" />
                
                <Card className="card-hover hover-lift ml-0 sm:ml-16 bg-card border-border group">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-start gap-3 mb-4 sm:mb-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                          <p className="text-primary font-semibold">{edu.field}</p>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{edu.duration}</span>
                        </div>
                        <Badge 
                          variant="secondary"
                          className={`${edu.status === 'Pursuing' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-success/10 text-success border-success/20'}`}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-foreground">Key Areas</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <Badge 
                            key={highlightIndex}
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;