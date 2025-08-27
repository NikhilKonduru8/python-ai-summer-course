
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Book, Trophy, Clock, DollarSign } from "lucide-react";

const Courses = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const courses = [
    {
      title: "Zero to Hero: Beginner → Intermediate",
      description: "Perfect for beginners starting their Python journey",
      duration: "6 classes, 1 per week",
      price: "$60 total ($10 per class)",
      icon: Book,
      classes: [
        {
          number: 1,
          title: "Getting Started",
          content: "Setting up your Python environment, Why Python, Basic functions (print() and input())"
        },
        {
          number: 2,
          title: "Data & Operations",
          content: "Arithmetic and assignment operators, Data types (variables), String manipulation and formatting (f-strings, str.format())"
        },
        {
          number: 3,
          title: "Decision Making",
          content: "Conditional statements: if, elif, else, Comparison and logical operators, Lists and indexing"
        },
        {
          number: 4,
          title: "Loops & Iteration",
          content: "for loops (with range()), while loops, break, continue"
        },
        {
          number: 5,
          title: "Functions & Error Handling",
          content: "Basic error handling (try, except), Functions"
        },
        {
          number: 6,
          title: "Final Project",
          content: "Choice Project (final project that will incorporate above skills into something that other people can use)"
        }
      ]
    },
    {
      title: "Contest Prep: Advanced → Competitive Coder",
      description: "For students ready to tackle competitive programming",
      duration: "5 weeks, 1 class per week",
      price: "$75 total ($15 per class)",
      icon: Trophy,
      classes: [
        {
          number: 1,
          title: "Python Review",
          content: "Comprehensive review of Python fundamentals and advanced concepts"
        },
        {
          number: 2,
          title: "Data Science Foundations",
          content: "Numpy, matplotlib for data manipulation and visualization"
        },
        {
          number: 3,
          title: "Machine Learning",
          content: "Pandas, scikit-learn - Add in training simple models and integrating LLMs"
        },
        {
          number: 4,
          title: "UI Development",
          content: "Streamlit (UI practice) for building interactive applications"
        },
        {
          number: 5,
          title: "Presentation Skills",
          content: "Mock presentations and presenting tips"
        }
      ]
    }
  ];

  return (
    <section id="courses" ref={elementRef} className="py-20 px-4 bg-section-gradient">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-on-scroll animate-in' : 'animate-on-scroll'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-black">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two comprehensive courses designed to take you from beginner to competitive programmer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div 
                key={index}
                className={`${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-${index + 1}`}
              >
                <Card className="h-full card-hover bg-white border-2 border-gray-200 shadow-xl">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-black mb-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      {course.description}
                    </CardDescription>
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-black">
                        <DollarSign className="w-4 h-4" />
                        {course.price}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="space-y-4 mb-8">
                      {course.classes.map((cls) => (
                        <div key={cls.number} className="border-l-4 border-black pl-4">
                          <h4 className="font-semibold text-black mb-1">
                            Class {cls.number}: {cls.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {cls.content}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                      <a href="https://forms.gle/HaU79P3qhA4pCdhr5" target="_blank" rel="noopener noreferrer">
                        Register for This Course
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
