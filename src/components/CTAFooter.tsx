import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTAFooter = () => {
  return (
    <section className="py-32 px-4 bg-gradient-premium text-primary-foreground relative overflow-hidden">
      
      <div className="container mx-auto max-w-7xl text-center relative z-10">
        <div className="animate-on-scroll">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6">
              🚀 Ready to Transform Your Future?
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-12 leading-tight">
            Start Your AI Journey Today
          </h2>
          <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-5xl mx-auto leading-relaxed">
            Join the next generation of innovators and master the technologies that will shape tomorrow
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Comprehensive Curriculum</h3>
              <p className="opacity-80">Well-structured lessons covering all the fundamentals</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Student Mentorship</h3>
              <p className="opacity-80">Direct access to instructors who understand learning</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Portfolio Projects</h3>
              <p className="opacity-80">Build applications for your resume</p>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="text-xl px-16 py-8 bg-background text-primary hover:bg-background/90 transition-all transform hover:scale-105 shadow-2xl font-bold"
            asChild
          >
            <a 
              href="https://forms.gle/QsRtV6VFTDKfWFcF9" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Secure Your Spot
            </a>
          </Button>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm opacity-80">
            <span>Questions? Contact our instructors:</span>
            <div className="flex gap-4">
              <a href="mailto:nikhilkonduru8@gmail.com" className="hover:text-background transition-colors">
                nikhilkonduru8@gmail.com
              </a>
              <a href="mailto:gargarnav10@gmail.com" className="hover:text-background transition-colors">
                gargarnav10@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;