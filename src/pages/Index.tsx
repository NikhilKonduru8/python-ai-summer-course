
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import ThreeBackground from "@/components/ThreeBackground";

const Index = () => {
  return (
    <div className="min-h-screen font-inter bg-background relative">
      <ThreeBackground />
      <Navigation />
      <Hero />
      <Courses />
      <Instructor />
      <Testimonials />
    </div>
  );
};

export default Index;
