import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CapstoneProject = () => {
  const steps = [
    {
      step: "1",
      title: "Choose Your Dataset",
      description: "Pick a dataset from Kaggle or another source that interests you - sports, movies, climate, anything!",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "2", 
      title: "Apply Your Skills",
      description: "Use everything you've learned to clean, visualize, and model your data like a real data scientist",
      icon: "🔬",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "3",
      title: "Present Your Findings",
      description: "Create a 2-5 minute presentation showcasing your discoveries and insights",
      icon: "📈",
      color: "from-purple-500 to-violet-500"
    },
    {
      step: "4",
      title: "Build Your Portfolio",
      description: "Projects can be shared on your resume or online portfolio to showcase your skills!",
      icon: "🏆",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-section-dark-gradient text-primary-foreground font-inter relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Final Capstone Project
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Put everything together in a real data science project that you can proudly showcase. 
            This isn't just homework - it's your first step into the world of AI and data science!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((item, index) => (
            <Card 
              key={index}
              className="border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-background/10 backdrop-blur-sm group overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-lg`}>
                    {item.step}
                  </div>
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-primary-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapstoneProject;