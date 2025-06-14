import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Instructor from "@/components/Instructor";
import Schedule from "@/components/Schedule";
import CourseBreakdown from "@/components/CourseBreakdown";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import Tools from "@/components/Tools";
import CapstoneProject from "@/components/CapstoneProject";
import WhatYoullGain from "@/components/WhatYoullGain";
import Testimonials from "@/components/Testimonials";
import Requirements from "@/components/Requirements";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Hero />
      <Overview />
      <Instructor />
      <CourseBreakdown />
      <Schedule />
      <Tools />
      <CapstoneProject />
      <CTAFooter />
    </div>
  );
};

export default Index;
