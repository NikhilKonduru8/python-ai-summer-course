import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground overflow-hidden">
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl text-center relative z-10 px-4">
        <div>
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-pulse">
              🚀 5-Week Intensive Program
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
            Master AI & Machine Learning
          </h1>
          
          <p className="text-3xl md:text-4xl mb-6 font-light text-primary-foreground/90">
            Python Course for Students
          </p>
          
          <p className="text-xl md:text-2xl mb-12 opacity-80 max-w-4xl mx-auto leading-relaxed">
            Learn Python programming through hands-on projects and real-world applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-xl px-16 py-8 bg-gradient-to-r from-accent to-secondary text-background hover:shadow-2xl transition-all transform hover:scale-105 shadow-xl font-bold border-0 rounded-2xl"
              asChild
            >
              <a 
                href="https://forms.gle/QsRtV6VFTDKfWFcF9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Your Journey
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
              <div className="text-3xl font-bold text-accent mb-2">5 Weeks</div>
              <div className="text-sm opacity-80">Intensive Learning</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent mb-2">Hands-On</div>
              <div className="text-sm opacity-80">Project Based</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent mb-2">Beginner</div>
              <div className="text-sm opacity-80">Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;