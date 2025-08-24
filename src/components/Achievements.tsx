import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Calendar } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Amazon ML Summer School 2025",
      category: "Machine Learning",
      description: "Selected for Amazon's prestigious ML Summer School program, focusing on advanced machine learning concepts and real-world applications in the industry.",
      date: "2025",
      status: "Ongoing",
      icon: Award,
      color: "bg-warning/10 text-warning border-warning/20"
    },
    {
      title: "CodAThon Winner",
      category: "Competitive Programming",
      description: "Won the coding competition demonstrating exceptional problem-solving skills and algorithmic thinking under time constraints.",
      date: "2024",
      status: "Achieved",
      icon: Trophy,
      color: "bg-success/10 text-success border-success/20"
    },
    {
      title: "Academic Excellence",
      category: "Education",
      description: "Consistently maintained high academic performance throughout the B.Tech program with a focus on AI/ML subjects.",
      date: "2022-Present",
      status: "Ongoing",
      icon: Star,
      color: "bg-primary/10 text-primary border-primary/20"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "GitHub Repositories", value: "25+" },
    { label: "Learning Hours", value: "1000+" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and accomplishments that mark my journey in technology and learning.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="card-hover hover-lift bg-card border-border group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant="secondary"
                      className={achievement.color}
                    >
                      {achievement.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="h-3 w-3" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <Badge 
                  variant="outline"
                  className="border-accent-purple/30 text-accent-purple mb-3"
                >
                  {achievement.category}
                </Badge>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="card-hover hover-lift bg-card border-border text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;