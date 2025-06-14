import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-primary text-primary-foreground py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Beginner Machine Learning & AI with Python
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 opacity-90 font-medium">
          Summer 4-Week Class
        </p>
        
        <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
          Learn the foundations of data and AI with Python — in just 4 weeks!
        </p>
        
        <Button 
          size="lg" 
          variant="secondary"
          className="text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-opacity-90 transition-all transform hover:scale-105"
          asChild
        >
          <a 
            href="https://forms.gle/QsRtV6VFTDKfWFcF9" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;