
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Schedule = () => {
const schedule = [
    {
      week: "Week 1",
      topics: "Python Review",
      dates: "June 24 & 26, 2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      week: "Week 2", 
      topics: "Control Flow, Functions, File I/O",
      dates: "July 1 & 3, 2025",
      color: "from-green-500 to-emerald-500"
    },
    {
      week: "Week 3",
      topics: "Data & Visualization",
      dates: "July 8 & 10, 2025",
      color: "from-purple-500 to-violet-500"
    },
    {
      week: "Week 4",
      topics: "Machine Learning & Capstone",
      dates: "July 15 & 17, 2025",
      color: "from-orange-500 to-red-500"
    },
    {
      week: "Week 5",
      topics: "Final Projects & Presentations",
      dates: "July 22 & 24, 2025",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-section-dark-gradient text-primary-foreground font-inter relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-primary-foreground">
            Class Schedule
          </h2>
           <p className="text-base md:text-lg text-primary-foreground/90 mb-6 md:mb-8 px-4">
             10 classes across 5 weeks, with each class lasting about 1 hour. Designed for ages 12-15.
           </p>
           
           {/* Enhanced timing highlight */}
           <div className="bg-gradient-to-r from-accent-teal/30 to-secondary-blue/30 backdrop-blur-sm border-2 border-accent-teal/50 rounded-2xl px-4 md:px-8 py-4 md:py-6 inline-block shadow-lg mb-4 max-w-full">
             <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-3">
               <Clock className="text-accent-teal flex-shrink-0" size={20} />
               <p className="text-lg md:text-xl font-bold text-accent-teal text-center">📅 Two Sessions Available Each Day: Tuesday And Thursday</p>
             </div>
             <div className="space-y-2">
               <div className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg border border-white/20">
                 <p className="text-base md:text-lg font-semibold text-accent-teal">Session 1: 11 AM - 12 PM</p>
               </div>
               <div className="bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg border border-white/20">
                 <p className="text-base md:text-lg font-semibold text-accent-teal">Session 2: 2 PM - 3 PM</p>
               </div>
             </div>
             
           </div>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          {schedule.map((item, index) => (
            <Card 
              key={index}
              className="border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-background/10 backdrop-blur-sm overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 flex-1">
                    <div className={`p-2 md:p-3 rounded-full bg-gradient-to-r ${item.color} text-white flex-shrink-0`}>
                      <Calendar size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-primary-foreground mb-1">{item.week}</h3>
                      <p className="text-sm md:text-lg text-primary-foreground/80 leading-relaxed">{item.topics}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto">
                    <p className="text-xs font-medium text-primary-foreground/60 mb-1 uppercase tracking-wide">Schedule</p>
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                      <p className="text-sm font-semibold text-primary-foreground whitespace-nowrap">{item.dates}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Schedule;
