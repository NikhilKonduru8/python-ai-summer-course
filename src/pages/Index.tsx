import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import CourseBreakdown from "@/components/CourseBreakdown";
import Requirements from "@/components/Requirements";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Overview />
      <CourseBreakdown />
      <Requirements />
    </div>
  );
};

export default Index;
