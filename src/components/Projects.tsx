import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";
import jobPortalImage from "@/assets/job-portal.jpg";
import smartAssistantImage from "@/assets/smart-assistant.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal Platform",
      description: "A comprehensive job portal platform built with the MERN stack, featuring job posting, application tracking, and responsive design. Implemented user authentication, advanced search filters, and an intuitive dashboard for both employers and job seekers.",
      image: jobPortalImage,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "ShadCN UI", "JWT"],
      features: [
        "User authentication & authorization",
        "Job posting and application system",
        "Advanced search and filtering",
        "Responsive design with ShadCN UI",
        "Real-time notifications",
        "Admin dashboard"
      ],
      githubUrl: "https://github.com/ayush9634",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Smart Assistant – Gemini Edition",
      description: "An intelligent assistant powered by Google's Gemini API, featuring PDF document processing, summarization capabilities, and interactive quiz modes. Built with Streamlit for an intuitive user interface and seamless document handling.",
      image: smartAssistantImage,
      technologies: ["Python", "Streamlit", "Gemini API", "PDF Processing", "NLP", "AI/ML"],
      features: [
        "PDF document upload and processing",
        "AI-powered text summarization",
        "Interactive quiz generation",
        "Natural language processing",
        "Streamlit web interface",
        "Multi-format document support"
      ],
      githubUrl: "https://github.com/ayush9634/smart-assistant",
      liveUrl: "#",
      status: "Active"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my expertise in full-stack development and AI integration through 
            real-world applications.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-hover hover-lift overflow-hidden bg-card border-border group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="secondary"
                      className={`${project.status === 'Active' ? 'bg-success/10 text-success border-success/20' : 'bg-primary/10 text-primary border-primary/20'}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                      <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <Code className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button 
                        variant="default"
                        size="lg"
                        className="bg-primary hover:bg-primary-dark text-primary-foreground hover-lift"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-5 w-5" />
                          View Code
                        </a>
                      </Button>
                      
                      {project.liveUrl !== "#" && (
                        <Button 
                          variant="outline"
                          size="lg"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline"
            size="lg"
            className="border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white hover-lift px-8"
            asChild
          >
            <a href="https://github.com/ayush9634" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;