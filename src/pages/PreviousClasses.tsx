
import Navigation from "@/components/Navigation";
import ThreeBackground from "@/components/ThreeBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, Award, BookOpen } from "lucide-react";

const PreviousClasses = () => {
  const highlights = [
    {
      icon: Users,
      title: "20+ Students",
      description: "Successfully taught over 20 students"
    },
    {
      icon: Calendar,
      title: "Weekly Classes",
      description: "1-hour classes held weekly over summer"
    },
    {
      icon: Award,
      title: "4.80★ Rating",
      description: "Outstanding student satisfaction"
    },
    {
      icon: BookOpen,
      title: "Complete Curriculum",
      description: "From Python basics to ML implementation"
    }
  ];

  const curriculum = [
    {
      week: "Weeks 1-2",
      title: "Python Fundamentals",
      topics: [
        "Python environment setup and basics",
        "Variables, data types, and operations", 
        "Control flow and functions",
        "File I/O and data handling"
      ]
    },
    {
      week: "Week 3",
      title: "Data Visualization & EDA",
      topics: [
        "Introduction to matplotlib and numpy",
        "Exploratory Data Analysis techniques",
        "Creating meaningful visualizations",
        "Pattern recognition in data"
      ]
    },
    {
      week: "Week 4",
      title: "Machine Learning Basics",
      topics: [
        "Introduction to ML concepts",
        "Supervised vs unsupervised learning",
        "Model training and evaluation",
        "Using scikit-learn library"
      ]
    },
    {
      week: "Week 5",
      title: "Final Projects",
      topics: [
        "Capstone project development",
        "Real-world data analysis",
        "Student presentations",
        "Peer feedback and learning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ThreeBackground />
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 px-4 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <Button variant="outline" className="mb-8 border-white text-white hover:bg-white/10" asChild>
              <a href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
                Our Previous Success
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                A comprehensive AI/ML class that took students from Python basics to implementing 
                Machine Learning models with outstanding results and student satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 px-4 bg-section-gradient">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Class Highlights
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {highlights.map((highlight, index) => (
                <Card key={index} className="text-center card-hover bg-card border-border shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Curriculum Overview */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                What We Covered
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {curriculum.map((week, index) => (
                  <Card key={index} className="card-hover bg-card border-border shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-card-foreground">
                        <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <div>
                          <div className="text-sm text-muted-foreground">{week.week}</div>
                          <div>{week.title}</div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {week.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Join Our Next Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the same high-quality instruction that made our previous class a success. 
              Register now for our upcoming courses.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4">
              <a href="https://forms.gle/HaU79P3qhA4pCdhr5" target="_blank" rel="noopener noreferrer">
                Register for Current Courses
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreviousClasses;
