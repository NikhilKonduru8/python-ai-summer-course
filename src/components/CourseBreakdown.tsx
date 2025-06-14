import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Calendar, FileText, Search } from "lucide-react";

const CourseBreakdown = () => {
  const weeks = [
    {
      week: "Week 1",
      title: "Python Review",
      icon: Book,
      topics: "Variables, Data Types (int, float, bool, list, tuple, dict)",
      project: "Employee Database (dictionary-based lookup system)",
      color: "from-purple-500 to-pink-500"
    },
    {
      week: "Week 2", 
      title: "Control Flow, Functions & File I/O",
      icon: FileText,
      topics: "if/elif/else, for and while loops, Functions, lambda, *args/**kwargs, Optional: List Comprehension",
      project: "File formats: .csv, .json, .xlsx",
      color: "from-blue-500 to-purple-500"
    },
    {
      week: "Week 3",
      title: "Data & Visualization", 
      icon: Calendar,
      topics: "What is data? Types of data, how it's collected (cookies, real-world use), Tools: pandas for data handling, matplotlib for visualization",
      project: "EDA (Exploratory Data Analysis): Discovering patterns, spotting anomalies, Intro to Kaggle",
      color: "from-green-500 to-blue-500"
    },
    {
      week: "Week 4",
      title: "Machine Learning",
      icon: Search,
      topics: "Supervised vs Unsupervised learning, Train/Test split, Model types: Linear Regression, KNN, Decision Tree",
      project: "Evaluation metrics: accuracy, RMSE, confusion matrix, Data cleaning: label encoding, NaN handling, Tool: scikit-learn",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-foreground">
            Course Breakdown
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A progressive 4-week journey from Python fundamentals to building your own ML project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {weeks.map((week, index) => {
            const IconComponent = week.icon;
            return (
              <Card 
                key={index} 
                className="border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${week.color} text-white shadow-lg`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <CardDescription className="text-muted-foreground font-medium">
                        {week.week}
                      </CardDescription>
                      <CardTitle className="text-xl text-card-foreground">
                        {week.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-card-foreground">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-card-foreground">Topics:</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {week.topics}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-card-foreground">Project/Focus:</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {week.project}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <Card className="mt-12 border-border shadow-lg bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-card-foreground">
              Final Class: Capstone Project Presentation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-card-foreground">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Choose</h4>
                <p className="text-sm text-muted-foreground">A dataset and question</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Apply</h4>
                <p className="text-sm text-muted-foreground">Data cleaning, visualization, ML modeling, and evaluation</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Present</h4>
                <p className="text-sm text-muted-foreground">Findings in a 2–5 min slideshow or video</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CourseBreakdown;