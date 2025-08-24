import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Brain, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in CSE(AIML) with strong academic foundation"
    },
    {
      icon: Code,
      title: "Development",
      description: "Skilled in MERN stack and modern web technologies"
    },
    {
      icon: Brain,
      title: "AI/ML",
      description: "Strong foundation in AI/ML concepts and applications"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Strong foundation in Data Structures & Algorithms"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           A developer with a strong computer science foundation, motivated to design and develop innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-in-left">
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              <p className="mb-6">
                I'm Ayush Srivastava, a dedicated <strong className="text-foreground">B.Tech student</strong> specializing in 
                <strong className="text-primary"> Computer Science Engineering (Artificial Intelligence and Machine Learning)</strong>. 
                My journey in technology began with a curiosity about how software can solve real-world problems.
              </p>
              
              <p className="mb-6">
                With expertise in <strong className="text-foreground">Java, Python, JavaScript</strong>, and the 
                <strong className="text-primary"> MERN stack</strong>, I've developed projects that showcase 
                my ability to build full-stack applications. I'm particularly interested about integrating 
                AI/ML capabilities into web applications.
              </p>
              
              <p className="mb-6">
                My technical skills extend to <strong className="text-foreground">cloud platforms (GCP)</strong>, 
                <strong className="text-primary"> databases (MySQL, MongoDB)</strong>, and modern development tools. 
                I believe in writing clean, efficient code and following best practices in software development.
              </p>
              
              <p>
                When I'm not coding, I enjoy exploring new technologies, participating in coding competitions, 
                and contributing to open-source projects. I'm always eager to learn and take on new challenges.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="card-hover hover-lift group bg-card border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;