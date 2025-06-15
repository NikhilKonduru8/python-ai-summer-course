
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
    <section className="py-20 px-4 bg-section-dark-gradient text-primary-foreground font-inter relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Class Schedule
          </h2>
           <p className="text-lg text-primary-foreground/90 mb-8">
             10 classes across 5 weeks, with each class lasting about 1 hour. Designed for ages 12-15.
           </p>
           
           {/* Enhanced timing highlight */}
           <div className="bg-gradient-to-r from-accent-teal/30 to-secondary-blue/30 backdrop-blur-sm border-2 border-accent-teal/50 rounded-2xl px-8 py-6 inline-block shadow-lg mb-4">
             <div className="flex items-center justify-center gap-3">
               <Clock className="text-accent-teal" size={24} />
               <p className="text-xl font-bold text-accent-teal">📅 Tentative Class Timing: 2-3 PM</p>
             </div>
             <p className="text-sm text-primary-foreground/80 mt-2">All times are tentative and subject to confirmation</p>
           </div>
        </div>
        
        <div className="space-y-6">
          {schedule.map((item, index) => (
            <Card 
              key={index}
              className="border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-background/10 backdrop-blur-sm overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground">{item.week}</h3>
                      <p className="text-lg text-primary-foreground/80">{item.topics}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-primary-foreground/60 mb-1 uppercase tracking-wide">Schedule</p>
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                      <p className="text-sm font-semibold text-primary-foreground">{item.dates}</p>
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
