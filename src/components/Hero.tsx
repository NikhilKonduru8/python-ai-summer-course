import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-primary text-primary-foreground py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Master AI & Machine Learning
          </h1>
          
          <p className="text-2xl md:text-3xl mb-6 font-light">
            Professional Python Course
          </p>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Build real-world AI applications in our intensive 4-week program
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 bg-background text-primary hover:bg-background/90 transition-all transform hover:scale-105 shadow-2xl font-semibold"
              asChild
            >
              <a 
                href="https://forms.gle/QsRtV6VFTDKfWFcF9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enroll Now
              </a>
            </Button>
            <div className="text-lg opacity-80">
              <span className="font-medium">Contact:</span> nikhilkonduru8@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;