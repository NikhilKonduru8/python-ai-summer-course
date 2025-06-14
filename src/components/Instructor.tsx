import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Instructor = () => {
  const instructors = [
    {
      name: "Nikhil Konduru",
      experience: "4+ years of Python programming experience, with a strong interest in AI, machine learning, and teaching.",
      background: "I've taught beginner coding to kids and teens, built AI projects, and love making tech easy to understand.",
      goal: "I want to make data science and ML approachable and fun for younger learners.",
      avatar: "👨‍💻"
    },
    {
      name: "Arnav",
      experience: "4+ years of coding experience, also passionate about coding and ML/AI.",
      background: "Dedicated to helping students understand complex concepts through hands-on learning.",
      goal: "Making technology accessible and exciting for the next generation of learners.",
      avatar: "👨‍🎓"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background font-inter">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Meet Your Instructors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from experienced developers who are passionate about teaching and AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {instructors.map((instructor, index) => (
            <Card 
              key={index}
              className="border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{instructor.avatar}</div>
                <CardTitle className="text-2xl text-card-foreground">
                  {instructor.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-card-foreground space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Experience:</h4>
                  <p className="text-muted-foreground">{instructor.experience}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Background:</h4>
                  <p className="text-muted-foreground">{instructor.background}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Goal:</h4>
                  <p className="text-muted-foreground">{instructor.goal}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border-border shadow-lg bg-card">
          <CardContent className="pt-6 text-center text-card-foreground">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-muted-foreground">
              Together, we helped run a coding club at our school, where we won many hackathons 
              and participated in NASA Ames hackathons. We're excited to share our passion for 
              technology and help you build amazing projects!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Instructor;