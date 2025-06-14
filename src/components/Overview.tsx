import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Overview = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Course Overview
          </h2>
        </div>
        
        <Card className="mb-8 border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground">What You'll Learn</CardTitle>
          </CardHeader>
          <CardContent className="text-card-foreground">
            <p className="text-lg mb-6 leading-relaxed">
              This is a beginner-friendly summer course that introduces students to data science, 
              machine learning, and artificial intelligence using Python. The class runs for 4 weeks, 
              with two classes per week — a total of 8 interactive sessions.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Students will explore Python tools, learn about real-world data, and build an 
              ML-powered capstone project.
            </p>
            
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-2 text-secondary-foreground">Prerequisites</h3>
              <p className="text-secondary-foreground">
                Students should already understand basic Python (like strings, loops, and conditionals).
              </p>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105"
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Overview;