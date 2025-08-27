import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: "Your teachings are very efficient.",
      author: "Student"
    },
    {
      quote: "I like that you guys post the slideshows on Google Classroom because we can always go back to them if we need help.",
      author: "Student"
    },
    {
      quote: "You are doing well at explaining and teaching the course.",
      author: "Student"
    },
    {
      quote: "[You guys are great at] helping people out",
      author: "Student"
    },
    {
      quote: "You guys did a great job of explaining the slideshow! You also went at a great speed, which wasn't too slow or too fast.",
      author: "Student"
    }
  ];

  const improvements = [
    "Honestly, I don't think you need to do better as you are already doing your best in my opinion.",
    "[There is] nothing [that you guys can do better]"
  ];

  return (
    <section id="testimonials" ref={elementRef} className="py-20 px-4 bg-section-gradient">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-on-scroll animate-in' : 'animate-on-scroll'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-black">
            What Our Students Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-black ml-2">4.80 out of 5</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 20 students have experienced our teaching methods with outstanding satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-${index + 1}`}
            >
              <Card className="h-full card-hover bg-white border-2 border-gray-200 shadow-xl">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-black mb-4" />
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-black">— {testimonial.author}</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-6`}>
            <Card className="h-full card-hover bg-white border-2 border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-black">Areas for Improvement</h3>
                <div className="space-y-4">
                  {improvements.map((improvement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">"{improvement}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className={`${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-7`}>
            <Card className="h-full card-hover bg-white border-2 border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-black">Student Engagement</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">80%</div>
                  <p className="text-gray-600 text-lg">
                    of students would sign up for Part 2 of the course
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
