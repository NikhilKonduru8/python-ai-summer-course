import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Rocket, BarChart3, Code, Brain, Zap } from "lucide-react";

const Overview = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Target,
      title: "Focused Learning",
      description: "10 sessions over 5 weeks with hands-on projects and practical applications"
    },
    {
      icon: Rocket,
      title: "Real Projects",
      description: "Build ML applications with modern tools and libraries used in the tech industry"
    },
    {
      icon: BarChart3,
      title: "Visualization",
      description: "Learn to analyze and visualize real-world datasets using professional tools"
    },
    {
      icon: Code,
      title: "Python Mastery",
      description: "Deepen your Python skills while learning AI and machine learning concepts"
    },
    {
      icon: Brain,
      title: "AI Fundamentals",
      description: "Understanding core concepts of artificial intelligence and neural networks"
    },
    {
      icon: Zap,
      title: "Thorough Understanding",
      description: "Thorough understanding of topics through multiple hands-on projects and examples"
    }
  ];

  return (
    <section ref={elementRef} className="py-32 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 ${isVisible ? 'animate-on-scroll animate-in' : 'animate-on-scroll'}`}>
          <div className="inline-block px-6 py-3 bg-accent/10 backdrop-blur-sm rounded-full text-accent font-semibold mb-6">
            ✨ Course Overview
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Your AI Journey Starts Here
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive introduction to artificial intelligence and machine learning using Python, designed for students ages 12-15.
            <span className="block mt-4 text-lg font-semibold text-accent">Completely free online course delivered through Zoom sessions and Google Classroom</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-${index + 1}`}
            >
              <Card className="h-full card-hover bg-gradient-card border-0 shadow-lg backdrop-blur-sm relative overflow-hidden group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mb-8 animate-pulse-glow">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-card-foreground group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </CardContent>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className={`bg-gradient-premium text-primary-foreground p-12 rounded-3xl shadow-2xl text-center relative overflow-hidden ${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-7`}>
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-bold">📋 Prerequisites</span>
            </div>
            <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
              Comfortable with basic python functions (such as print()), data types (variables), import/export, and committed to learn
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl">
                <p className="font-medium mb-3">Have Questions? Reach Out!</p>
                <div className="space-y-2 text-sm opacity-90">
                  <div>
                    <a href="mailto:nikhilkonduru8@gmail.com" className="hover:text-accent transition-colors underline">
                      nikhilkonduru8@gmail.com
                    </a>
                  </div>
                  <div>
                    <a href="mailto:gargarnav10@gmail.com" className="hover:text-accent transition-colors underline">
                      gargarnav10@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;