
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Code, GraduationCap, Trophy, ExternalLink } from "lucide-react";

const Instructor = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const instructors = [
    {
      name: "Nikhil Konduru",
      experience: "4+ years of coding experience with a focus on AI, machine learning, and teaching.",
      background: "Experienced in teaching coding fundamentals and building projects with real-world applications.",
      goal: "Making data science and ML accessible through practical, hands-on learning.",
      avatar: "👨‍💻",
      email: "nikhilkonduru8@gmail.com",
      portfolio: "https://github.com/NikhilKonduru8/NKonduru-DevPortfolio"
    },
    {
      name: "Arnav Garg",
      experience: "4+ years of coding experience and expertise in machine learning and artificial intelligence.",
      background: "Passionate about translating complex technical concepts into understandable learning experiences.",
      goal: "Empowering fellow students with technology skills.",
      avatar: "👨‍🎓",
      email: "gargarnav10@gmail.com"
    }
  ];

  return (
    <section ref={elementRef} className="py-16 md:py-32 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-12 md:mb-20 ${isVisible ? 'animate-on-scroll animate-in' : 'animate-on-scroll'}`}>
          <div className="inline-block px-4 md:px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-4 md:mb-6 text-sm md:text-base">
            👨‍🏫 Meet Your Instructors
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-8 leading-tight bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent px-2">
            Learn from Fellow Students
          </h2>
          <p className="text-lg md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed px-4">
            Student instructors who understand the learning process and can relate to your journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className={`${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-${index + 2}`}
            >
              <Card className="h-full card-hover bg-background/10 backdrop-blur-sm border-white/20 shadow-xl relative overflow-hidden group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 md:p-10 relative z-10">
                  <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-8">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-accent to-secondary rounded-3xl flex items-center justify-center text-2xl md:text-4xl shadow-2xl animate-pulse-glow flex-shrink-0 mx-auto sm:mx-0">
                      {instructor.avatar}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary-foreground group-hover:text-accent transition-colors duration-300">
                        {instructor.name}
                      </h3>
                      <div className="space-y-2 mb-6 text-primary-foreground/70">
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          <a href={`mailto:${instructor.email}`} className="hover:text-accent transition-colors text-sm underline break-all">
                            {instructor.email}
                          </a>
                        </div>
                        {instructor.portfolio && (
                          <div className="flex items-center justify-center sm:justify-start gap-2">
                            <ExternalLink className="w-4 h-4 flex-shrink-0" />
                            <a href={instructor.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-sm underline">
                              Portfolio
                            </a>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                            <Code className="w-5 h-5 text-accent flex-shrink-0" />
                            <h4 className="font-bold text-base md:text-lg text-accent">Experience</h4>
                          </div>
                          <p className="text-primary-foreground/80 leading-relaxed text-sm md:text-base">{instructor.experience}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                            <GraduationCap className="w-5 h-5 text-accent flex-shrink-0" />
                            <h4 className="font-bold text-base md:text-lg text-accent">Teaching Approach</h4>
                          </div>
                          <p className="text-primary-foreground/80 leading-relaxed text-sm md:text-base">{instructor.background}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className={`bg-gradient-premium text-primary-foreground p-6 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden ${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-4`}>
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <Trophy className="w-6 h-6 md:w-8 md:h-8 text-accent flex-shrink-0" />
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-lg md:text-xl font-bold">
                Our Background
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Proven Track Record</h3>
            <p className="text-base md:text-xl leading-relaxed max-w-4xl mx-auto opacity-90 px-4">
              As fellow students, we understand the challenges of learning programming and data science. 
              Together we have participated and won multiple high school hackathons. Our approach focuses on 
              breaking down complex concepts into manageable steps and providing the support and guidance 
              needed for successful learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
