import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Instructor = () => {
  const instructors = [
    {
      name: "Nikhil Konduru",
      experience: "4+ years of Python programming experience, with a strong focus on AI, machine learning, and education.",
      background: "Experienced in teaching coding fundamentals and building AI projects with real-world applications.",
      goal: "Making data science and ML accessible through practical, hands-on learning.",
      avatar: "👨‍💻",
      email: "nikhilkonduru8@gmail.com"
    },
    {
      name: "Arnav Garg",
      experience: "4+ years of coding experience with expertise in machine learning and artificial intelligence.",
      background: "Passionate about translating complex technical concepts into understandable learning experiences.",
      goal: "Empowering the next generation with cutting-edge technology skills.",
      avatar: "👨‍🎓",
      email: "gargarnav10@gmail.com"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Expert Instructors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry professionals with proven teaching experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {instructors.map((instructor, index) => (
            <Card 
              key={index}
              className="border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                    {instructor.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                      {instructor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      <a href={`mailto:${instructor.email}`} className="hover:text-primary transition-colors">
                        {instructor.email}
                      </a>
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Experience</h4>
                        <p className="text-muted-foreground text-sm">{instructor.experience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Approach</h4>
                        <p className="text-muted-foreground text-sm">{instructor.background}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border-border shadow-lg bg-primary/5 slide-up stagger-delay-4">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Background</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We co-founded and led our school's coding club, achieving multiple hackathon victories 
              including recognition at NASA Ames competitions. Our combined expertise in software 
              development and education creates an optimal learning environment for ambitious students.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Instructor;