
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Zap, ChevronDown } from "lucide-react";

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="min-h-screen flex items-center justify-center bg-hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`${isVisible ? 'animate-on-scroll animate-in' : 'animate-on-scroll'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Code className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">Learn Python & Competitive Programming</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight text-white">
            Choose Your <span className="text-gray-300">Python Path</span>
            <br />
            <span className="text-white">by Skill Level</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join our comprehensive Python courses designed for beginners and competitive programmers. 
            Learn from experienced student instructors who understand your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4">
              <a href="https://forms.gle/HaU79P3qhA4pCdhr5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Register Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-black bg-white hover:bg-white/90 text-lg px-8 py-4">
              <a href="#courses" className="text-black">View Courses</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.80★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down arrow animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#courses" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll for more</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
