import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Overview = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div 
        ref={elementRef}
        className={`container mx-auto max-w-6xl animate-on-scroll ${isVisible ? 'animate-in' : ''}`}
      >
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            AI & Machine Learning for Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive curriculum designed to build strong foundations in AI and data science
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 slide-up stagger-delay-1">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Focused Learning</h3>
              <p className="text-muted-foreground">8 intensive sessions over 4 weeks with hands-on projects</p>
            </CardContent>
          </Card>
          
          <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 slide-up stagger-delay-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real Projects</h3>
              <p className="text-muted-foreground">Build ML applications with modern tools and libraries</p>
            </CardContent>
          </Card>
          
          <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 slide-up stagger-delay-3">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Science</h3>
              <p className="text-muted-foreground">Learn to analyze and visualize real-world datasets</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-lg text-center slide-up stagger-delay-4">
          <div className="mb-6">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">Prerequisites</span>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Basic Python knowledge required (variables, loops, functions)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <p className="text-muted-foreground">Questions? Contact us:</p>
            <div className="flex gap-4 text-sm">
              <a href="mailto:nikhilkonduru8@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                nikhilkonduru8@gmail.com
              </a>
              <a href="mailto:gargarnav10@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                gargarnav10@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;