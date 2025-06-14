import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      week: "Week 1",
      topics: "Python Review",
      dates: "TBD - [Add date placeholders]",
      color: "from-blue-500 to-cyan-500"
    },
    {
      week: "Week 2", 
      topics: "Control Flow, Functions, File I/O",
      dates: "TBD - [Add date placeholders]",
      color: "from-green-500 to-emerald-500"
    },
    {
      week: "Week 3",
      topics: "Data & Visualization",
      dates: "TBD - [Add date placeholders]",
      color: "from-purple-500 to-violet-500"
    },
    {
      week: "Week 4",
      topics: "Machine Learning & Capstone",
      dates: "TBD - [Add date placeholders]",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary font-inter">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-foreground">
            Class Schedule
          </h2>
           <p className="text-lg text-secondary-foreground">
            8 classes across 4 weeks, with each class lasting about 1 hour
          </p>
        </div>
        
        <div className="space-y-6">
          {schedule.map((item, index) => (
            <Card 
              key={index}
              className="border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">{item.week}</h3>
                      <p className="text-lg text-muted-foreground">{item.topics}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-muted-foreground">Dates</p>
                    <p className="text-sm text-card-foreground">{item.dates}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="mt-8 border-border shadow-lg bg-card">
          <CardContent className="pt-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="text-primary" size={24} />
              <h3 className="text-lg font-bold text-card-foreground">Flexible Scheduling</h3>
            </div>
            <p className="text-muted-foreground">
              Exact dates will be determined based on student availability. 
              We'll work with you to find the best times that fit your summer schedule!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Schedule;