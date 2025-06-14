import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhatYoullLearn = () => {
  const skills = [
    {
      title: "Python Logic & Data Types",
      description: "Master Python fundamentals and work with different file formats",
      icon: "🐍"
    },
    {
      title: "Real-World Datasets",
      description: "Learn to work with actual data from various sources and industries",
      icon: "📊"
    },
    {
      title: "Data Visualization",
      description: "Create stunning charts and graphs using matplotlib and pandas",
      icon: "📈"
    },
    {
      title: "Exploratory Data Analysis",
      description: "Discover patterns and insights hidden in your data",
      icon: "🔍"
    },
    {
      title: "Machine Learning Models",
      description: "Build and train basic ML models using scikit-learn",
      icon: "🤖"
    },
    {
      title: "Model Evaluation",
      description: "Evaluate models with real-world metrics and understand performance",
      icon: "📝"
    },
    {
      title: "Data Presentation",
      description: "Present findings with visuals and code like a professional",
      icon: "💼"
    },
    {
      title: "Project Portfolio",
      description: "Build something amazing you can showcase to colleges and employers",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background font-inter">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What You'll Learn
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From Python basics to advanced machine learning, you'll gain practical skills 
            that are in high demand in today's tech industry
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card group"
            >
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-card-foreground">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="max-w-md mx-auto border-border shadow-lg bg-gradient-secondary">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Ready to start learning?
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

export default WhatYoullLearn;