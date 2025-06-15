import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Code, GraduationCap, Trophy } from "lucide-react";

const Instructor = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const instructors = [
    {
      name: "Nikhil Konduru",
      experience: "4+ years of Python programming experience, with a strong focus on AI, machine learning, and education.",
      background: "Experienced in teaching coding fundamentals and building AI projects with real-world applications.",
      goal: "Making data science and ML accessible through practical, hands-on learning.",
      avatar: "👨‍💻",
      email: "nikhilkonduru8@gmail.com",
      specialties: ["Python Programming", "Machine Learning", "Data Science", "Education"]
    },
    {
      name: "Arnav Garg",
      experience: "4+ years of coding experience with expertise in machine learning and artificial intelligence.",
      background: "Passionate about translating complex technical concepts into understandable learning experiences.",
      goal: "Empowering the next generation with cutting-edge technology skills.",
      avatar: "👨‍🎓",
      email: "gargarnav10@gmail.com",
      specialties: ["AI Development", "Algorithm Design", "Project Management", "Mentorship"]
    }
  ];

  return (
    <section ref={elementRef} className="py-32 px-4 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 ${isVisible ? 'animate-on-scroll animate-in' : 'animate-on-scroll'}`}>
          <div className="inline-block px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-semibold mb-6">
            👨‍🏫 Meet Your Instructors
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Learn from the Best
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Student-focused educators with proven experience in both coding and teaching
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className={`${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-${index + 2}`}
            >
              <Card className="h-full card-hover bg-gradient-card border-0 shadow-xl backdrop-blur-sm relative overflow-hidden group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-start gap-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-4xl shadow-2xl animate-pulse-glow">
                      {instructor.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {instructor.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${instructor.email}`} className="hover:text-accent transition-colors text-sm underline">
                          {instructor.email}
                        </a>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Code className="w-5 h-5 text-accent" />
                            <h4 className="font-bold text-lg text-primary">Experience</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{instructor.experience}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <GraduationCap className="w-5 h-5 text-accent" />
                            <h4 className="font-bold text-lg text-primary">Teaching Approach</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{instructor.background}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg text-primary mb-3">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {instructor.specialties.map((specialty, idx) => (
                              <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className={`bg-gradient-premium text-primary-foreground p-12 rounded-3xl shadow-2xl relative overflow-hidden ${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-4`}>
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-accent" />
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-xl font-bold">
                Our Background
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-6">Proven Track Record</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              We co-founded and led our school's coding club, achieving multiple hackathon victories 
              including recognition at NASA Ames competitions. Our combined expertise in software 
              development and education creates an optimal learning environment for ambitious students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;