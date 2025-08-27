
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Code, GraduationCap, Trophy, Award, Github, Linkedin } from "lucide-react";

const Instructor = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const instructors = [
    {
      name: "Arnav Garg",
      experience: "4+ years of coding experience",
      achievements: [
        "Multiple hackathon awards won across various competitions",
        "Multiple AI-powered projects covering advanced neural networks and machine learning models",
        "Successful vice president of the ACE coding club at Hart Middle School",
        "Example-based teaching style focusing on turning complex topics into understandable chunks"
      ],
      avatar: "👨‍🎓",
      email: "gargarnav10@gmail.com"
    },
    {
      name: "Nikhil Konduru",
      experience: "4+ years of coding experience",
      achievements: [
        "Multiple hackathon award winner with recognition in regional and national competitions",
        "Made multiple successful SAAS apps published to the public with active user bases",
        "Interned at an AI Startup as an 8th grader, contributing to real-world projects",
        "Successful secretary of the ACE coding club at Hart Middle School, managing operations and member engagement"
      ],
      avatar: "👨‍💻",
      email: "nikhilkonduru8@gmail.com",
      github: "https://github.com/NikhilKonduru8",
      linkedin: "https://www.linkedin.com/in/nikhil-konduru-7b6828372/"
    }
  ];

  return (
    <section id="instructors" ref={elementRef} className="py-20 px-4 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-on-scroll animate-in' : 'animate-on-scroll'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">
            Meet Your Instructors
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Learn from experienced student instructors who understand your journey and have proven track records
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className={`${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-${index + 2}`}
            >
              <Card className="h-full card-hover bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center text-4xl shadow-2xl flex-shrink-0 mx-auto sm:mx-0">
                      {instructor.avatar}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {instructor.name}
                      </h3>
                      <div className="flex items-center justify-center sm:justify-start gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-white" />
                          <a href={`mailto:${instructor.email}`} className="hover:text-white/80 transition-colors text-sm underline text-white">
                            {instructor.email}
                          </a>
                        </div>
                        {instructor.github && (
                          <a href={instructor.github} target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                            <Github className="w-4 h-4 text-white" />
                          </a>
                        )}
                        {instructor.linkedin && (
                          <a href={instructor.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                            <Linkedin className="w-4 h-4 text-white" />
                          </a>
                        )}
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                          <Code className="w-5 h-5 text-white/80" />
                          <h4 className="font-bold text-lg text-white/80">Experience</h4>
                        </div>
                        <p className="text-white/70 leading-relaxed">{instructor.experience}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                          <Award className="w-5 h-5 text-white/80" />
                          <h4 className="font-bold text-lg text-white/80">Achievements</h4>
                        </div>
                        <ul className="space-y-2">
                          {instructor.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-white/70 text-sm leading-relaxed flex items-start gap-2">
                              <span className="text-white/50 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className={`bg-white/10 backdrop-blur-sm text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden ${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-4`}>
          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-white/80" />
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-xl font-bold">
                Our Track Record
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-white">Proven Success</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto text-white/90">
              Together, we taught a very successful AI/ML class in the summer, covering everything from Python basics 
              to Regression and Classification using Machine Learning. The class had over 20 students and we held 
              1-hour classes weekly with outstanding results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
