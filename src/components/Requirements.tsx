import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Requirements = () => {
  const requirements = [
    {
      title: "A laptop with Python",
      description: "We'll guide you through the setup process",
      icon: "💻"
    },
    {
      title: "Enthusiasm to learn and explore", 
      description: "Bring your curiosity and willingness to experiment",
      icon: "🚀"
    },
    {
      title: "Basic Python understanding",
      description: "Strings, loops, and conditionals knowledge required",
      icon: "🐍"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What You'll Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get started on your AI journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {requirements.map((req, index) => (
            <Card 
              key={index}
              className="text-center border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{req.icon}</div>
                <CardTitle className="text-lg text-card-foreground">
                  {req.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {req.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="max-w-md mx-auto border-border shadow-lg bg-card">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Ready to start your AI journey?
              </h3>
              <Button 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105"
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Requirements;