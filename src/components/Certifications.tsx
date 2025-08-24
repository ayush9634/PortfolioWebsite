import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming using Java",
      issuer: "Infosys Springboard",
      description: "Comprehensive certification covering object-oriented programming, data structures, and advanced Java concepts.",
      date: "2025",
      status: "Certified",
      skills: ["OOP", "Collections", "Multithreading", "Exception Handling"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      title: "Python Basics",
      issuer: "Coursera",
      description: "Advanced certification in Python programming, including libraries for data science and machine learning.",
      date: "2023",
      status: "Certified", 
      skills: ["Python Basics", "Data Structures", "Libraries", "Scripting"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "ReactJS",
      issuer: "Infosys Springboard",
      description: "Modern React development including hooks, state management, and component architecture.",
      date: "2024",
      status: "Certified",
      skills: ["JSX", "Hooks", "State Management", "Component Design"],
      color: "bg-cyan-500/10 text-cyan-600 border-cyan-200"
    },
    {
      title: "Database and SQL",
      issuer: "Infosys Springboard",
      description: "Database design, query optimization, and advanced SQL concepts for enterprise applications.",
      date: "2025",
      status: "Certified",
      skills: ["Query Design", "Database Design", "Optimization", "Stored Procedures"],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "Introduction to Artificial Intelligence(AI)",
      issuer: "Coursera",
      description: "Core AI concepts including machine learning algorithms, neural networks, and practical applications.",
      date: "2023",
      status: "Certified",
      skills: ["ML Algorithms", "Neural Networks", "Data Processing", "AI Ethics"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "nVIDIA Deep Learning Institute",
      description: "Advanced deep learning techniques including CNNs, RNNs, and modern architectures.",
      date: "2024",
      status: "Certified",
      skills: ["CNNs", "RNNs", "Transfer Learning", "Model Optimization"],
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="card-hover hover-lift bg-card border-border group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant="secondary"
                      className={cert.status === 'Certified' ? 'bg-success/10 text-success border-success/20' : 'bg-warning/10 text-warning border-warning/20'}
                    >
                      {cert.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 font-medium">
                  {cert.issuer}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                >
                  <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                  View Certificate
                </Button>

                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Summary */}
        <div className="mt-16 text-center">
          <Card className="card-hover bg-card border-border inline-block">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gradient mb-1">6</div>
                  <div className="text-sm text-muted-foreground">Total Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient mb-1">6</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient mb-1">0</div>
                  <div className="text-sm text-muted-foreground">In Progress</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Skills Validated</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;