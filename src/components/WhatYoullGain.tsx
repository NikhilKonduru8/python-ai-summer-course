import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhatYoullGain = () => {
  const benefits = [
    {
      title: "Practical Experience",
      description: "Hands-on experience with Python & machine learning that goes beyond textbooks",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real Confidence",
      description: "Confidence to work with real data and tackle complex problems independently",
      icon: "💪",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Portfolio Project",
      description: "Your own mini data project to show off to colleges, friends, and future employers",
      icon: "🎨",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Academic Head Start",
      description: "A significant advantage for high school or college-level computer science and AI courses",
      icon: "🎓",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary font-inter">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-foreground">
            What You'll Gain
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This isn't just about learning to code - it's about building skills and confidence 
            that will benefit you for years to come
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card group overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border-border shadow-lg bg-card">
          <CardContent className="pt-8 pb-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Skills That Matter
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In today's world, data literacy and AI understanding are becoming as important as 
              reading and writing. By learning these skills now, you're preparing yourself for 
              success in almost any field you choose to pursue.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhatYoullGain;