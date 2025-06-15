import Navigation from "@/components/Navigation";
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
    <div className="min-h-screen font-inter bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <div id="overview">
          <Overview />
        </div>
        <div id="instructor">
          <Instructor />
        </div>
        <div id="curriculum">
          <CourseBreakdown />
        </div>
        <div id="schedule">
          <Schedule />
        </div>
        <div id="tools">
          <Tools />
        </div>
        <div id="project">
          <CapstoneProject />
        </div>
        <CTAFooter />
      </div>
    </div>
  );
};

export default Index;
