import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Tools = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const tools = [
    {
      name: "Python",
      description: "The programming language powering AI and data science",
      icon: "🐍",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Jupyter Notebooks",
      description: "Interactive coding environment for data analysis",
      icon: "📓",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "pandas",
      description: "Powerful data manipulation and analysis library",
      icon: "🐼",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "matplotlib",
      description: "Create beautiful visualizations and charts",
      icon: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "scikit-learn",
      description: "Machine learning library for building AI models",
      icon: "🤖",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Google Colab",
      description: "Cloud-based coding platform - no setup required!",
      icon: "☁️",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary font-inter">
      <div 
        ref={elementRef}
        className={`container mx-auto max-w-6xl animate-on-scroll ${isVisible ? 'animate-in' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-foreground">
            Tools You'll Be Using
          </h2>
          <p className="text-lg text-secondary-foreground max-w-3xl mx-auto">
            Learn to code using the same tools and libraries that power modern AI and data science projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card 
              key={index}
              className={`border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card group overflow-hidden animate-on-scroll-scale stagger-delay-${(index % 6) + 1} ${isVisible ? 'animate-in' : ''}`}
            >
              <div className={`h-1 bg-gradient-to-r ${tool.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <CardTitle className="text-xl text-card-foreground">
                  {tool.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="mt-12 border-border shadow-lg bg-card">
          <CardContent className="pt-8 pb-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Industry-Standard Tools
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These tools are widely used in AI and data science. 
              Learning them now will give you a solid foundation for college computer science courses!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Tools;