import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-purple/10 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Ayush Srivastava</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Full-Stack Developer | AI & ML Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Excited about building innovative solutions with modern technologies. 
            Specializing in MERN stack development and artificial intelligence.
          </p>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="default" 
              size="lg" 
              className="group hover-lift bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg"
              asChild
            >
              <a href="https://github.com/ayush9634" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group hover-lift border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              asChild
            >
              <a href="https://linkedin.com/in/ayushsrivastava9634" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            
         <Button 
  variant="outline" 
  size="lg" 
  className="group hover-lift border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white px-8 py-6 text-lg"
  asChild
>
  <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=srivastavaayush2207@gmail.com&su=Opportunity%20to%20Connect&body=Hello%20Ayush%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.%0A%0ABest%20Regards%2C"
  target="_blank" 
  rel="noopener noreferrer"
>
  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
  Get In Touch
</a>

</Button>


          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce-in">
          <a 
            href="#about" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowDown className="h-6 w-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-purple/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default Hero;