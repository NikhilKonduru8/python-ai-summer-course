import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This class made Python click for me.",
      name: "Student A",
      avatar: "👩‍🎓",
      color: "from-blue-500 to-cyan-500"
    },
    {
      quote: "I never thought I could understand AI so easily — thank you!",
      name: "Student B", 
      avatar: "👨‍🎓",
      color: "from-purple-500 to-violet-500"
    },
    {
      quote: "The hands-on projects made everything so much clearer.",
      name: "Student C",
      avatar: "👩‍💻",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background font-inter">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What Other Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students who have already started their journey in AI and data science
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card group overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${testimonial.color}`}></div>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <blockquote className="text-lg italic text-card-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-muted-foreground font-medium">
                  — {testimonial.name}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="mt-12 border-border shadow-lg bg-gradient-secondary">
          <CardContent className="pt-8 pb-8 text-center">
            <h3 className="text-xl font-bold mb-4 text-card-foreground">
              Join Our Growing Community
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be part of a supportive learning environment where students help each other 
              grow and achieve their goals in technology and beyond.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;