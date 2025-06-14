import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTAFooter = () => {
  return (
    <section className="py-24 px-4 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Start Your AI Journey
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Learn the fundamentals of AI and machine learning to excel in your future studies
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