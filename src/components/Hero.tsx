import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient text-primary-foreground overflow-hidden">
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-subtle-grid opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl text-center relative z-10 px-4">
        <div>
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-pulse">
              🚀 5-Week Program for Ages 12-15
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight gradient-text">
            Master AI & Machine Learning
          </h1>
          
          <p className="text-3xl md:text-4xl mb-6 font-light text-primary-foreground/90">
            Python Course for Students
          </p>
          
          <p className="text-xl md:text-2xl mb-8 opacity-80 max-w-4xl mx-auto leading-relaxed">
            Learn Python programming through hands-on projects and real-world applications. 
          </p>
          
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="bg-accent-teal/20 backdrop-blur-sm border border-accent-teal/30 rounded-2xl px-8 py-4 inline-block">
              <span className="text-xl font-bold text-accent-teal">100% Free • Online via Zoom • Google Classroom</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-xl px-16 py-8 bg-gradient-to-r from-accent-teal to-secondary-blue text-primary-foreground hover:shadow-2xl transition-all transform hover:scale-105 shadow-glow shadow-glow-hover font-bold border-0 rounded-2xl"
              asChild
            >
              <a 
                href="https://forms.gle/QsRtV6VFTDKfWFcF9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Register
              </a>
            </Button>
            <div className="text-lg opacity-80 bg-background/10 backdrop-blur-sm px-6 py-4 rounded-xl">
              <span className="font-medium block text-center">Questions?</span>
              <div className="text-sm space-y-1 mt-2">
                <div>nikhilkonduru8@gmail.com</div>
                <div>gargarnav10@gmail.com</div>
              </div>
            </div>
          </div>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent-teal mb-2">5 Weeks</div>
              <div className="text-sm opacity-80">Structured Learning</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent-teal mb-2">Hands-On</div>
              <div className="text-sm opacity-80">Project Based</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent-teal mb-2">Beginner</div>
              <div className="text-sm opacity-80">Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;