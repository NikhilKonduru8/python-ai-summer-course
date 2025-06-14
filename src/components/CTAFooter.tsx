import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTAFooter = () => {
  return (
    <section className="py-20 px-4 bg-gradient-primary text-primary-foreground font-inter">
      <div className="container mx-auto max-w-4xl text-center">
        <Card className="border-none shadow-2xl bg-primary-foreground/10 backdrop-blur-sm">
          <CardContent className="pt-12 pb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join us this summer for an incredible learning experience that will change 
              how you think about technology, data, and the future.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-lg opacity-90">
                <span>✨</span>
                <span>4 weeks, 8 classes, unlimited possibilities</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-lg opacity-90">
                <span>🚀</span>
                <span>Build real projects, gain real skills</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-lg opacity-90">
                <span>🎯</span>
                <span>Get ahead in the AI revolution</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="text-xl px-12 py-6 bg-primary-foreground text-primary hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
              asChild
            >
              <a 
                href="https://forms.gle/QsRtV6VFTDKfWFcF9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join the Summer Class Now
              </a>
            </Button>
            
            <p className="text-sm mt-6 opacity-75">
              Limited spots available • Early registration recommended
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTAFooter;