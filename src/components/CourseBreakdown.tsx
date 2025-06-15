import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Calendar, FileText, Search } from "lucide-react";

const CourseBreakdown = () => {
  const weeks = [
    {
      week: "Week 1",
      title: "Python Review",
      icon: Book,
      topics: "Variables and Data types (integers, floats, booleans, lists, tuples, dictionaries), Control Flow (if, elif, else, for, while), Functions (lambda functions, **args, **kwargs), List Comprehension, File/IO (.csv, .json, .xlsx)",
      project: "Employee Database: Create a dictionary with employee ID and details, then make a program which allows the user to input the ID and retrieve name, salary, etc.",
      color: "from-purple-500 to-pink-500"
    },
    {
      week: "Week 2", 
      title: "Introduction to Data",
      icon: FileText,
      topics: "What is Data? Fundamental concepts of data collection (cookies, etc.), Rows, columns, and observations, Why data matters in AI/ML, Data types (Numeric, Categorical, Boolean, Datetime, Text), Common file formats",
      project: "Data handling with pandas library - load, clean, add to, remove from, or manipulate data. Introduction to Kaggle platform.",
      color: "from-blue-500 to-purple-500"
    },
    {
      week: "Week 3",
      title: "Data Visualization & EDA", 
      icon: Calendar,
      topics: "Introduction to data visualization with matplotlib.pyplot and numpy, Exploratory Data Analysis (EDA) - discovering patterns, spotting anomalies, testing hypotheses, checking assumptions",
      project: "Create visualizations showing data correlations and patterns, perform initial investigations on real datasets",
      color: "from-green-500 to-blue-500"
    },
    {
      week: "Week 4",
      title: "Machine Learning",
      icon: Search,
      topics: "What is ML? Types: supervised vs unsupervised, Train/test split, Model types: Linear Regression, KNN, Decision Tree, Evaluation metrics: accuracy, RMSE, confusion matrix, Data preprocessing: label encoders, NaN removal",
      project: "Fit a regression or classification model to a dataset, run evaluation reports, use scikit-learn for ML modeling",
      color: "from-orange-500 to-red-500"
    },
    {
      week: "Week 5",
      title: "Capstone Project",
      icon: Search,
      topics: "Use data to answer a question, Implement data visualization, exploratory data analysis, ML models, evaluation metrics, and preprocessing methods",
      project: "Create a 2-5 minute presentation highlighting findings through data and methods used to discover them",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
            5-Week Curriculum
          </h2>
          <p className="text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            A progressive 5-week journey from Python fundamentals to building your own ML project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weeks.map((week, index) => {
            const IconComponent = week.icon;
            return (
              <Card 
                key={index} 
                className="border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-background/10 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${week.color} text-white shadow-lg`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <CardDescription className="text-primary-foreground/70 font-medium">
                        {week.week}
                      </CardDescription>
                      <CardTitle className="text-xl text-primary-foreground">
                        {week.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-primary-foreground">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-primary-foreground">Topics:</h4>
                    <p className="text-sm leading-relaxed text-primary-foreground/80">
                      {week.topics}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary-foreground">Project/Focus:</h4>
                    <p className="text-sm leading-relaxed text-primary-foreground/80">
                      {week.project}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="border-white/20 shadow-xl bg-background/10 backdrop-blur-sm md:col-span-2 mx-auto max-w-3xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary-foreground">
                Week 5: Capstone Project Presentation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-primary-foreground">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Choose Your Data</h4>
                  <p className="text-sm text-primary-foreground/80">Select a dataset and research question that interests you</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Apply Your Skills</h4>
                  <p className="text-sm text-primary-foreground/80">Use data visualization, EDA, ML modeling, and evaluation techniques</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Present Findings</h4>
                  <p className="text-sm text-primary-foreground/80">Share your discoveries in a 2-5 minute presentation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseBreakdown;