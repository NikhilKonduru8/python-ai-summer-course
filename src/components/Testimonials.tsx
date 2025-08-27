
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: "Your teachings are very efficient.",
      type: "What we did well",
      rating: 5
    },
    {
      quote: "I like that you guys post the slideshows on Google Classroom because we can always go back to them if we need help.",
      type: "What we did well",
      rating: 5
    },
    {
      quote: "You are doing well at explaining and teaching the course.",
      type: "What we did well",
      rating: 5
    },
    {
      quote: "[You guys are great at] helping people out",
      type: "What we did well",
      rating: 5
    },
    {
      quote: "You guys did a great job of explaining the slideshow! You also went at a great speed, which wasn't too slow or too fast.",
      type: "What we did well",
      rating: 5
    },
    {
      quote: "Honestly, I don't think you need to do better as you are already doing your best in my opinion.",
      type: "Recommendation",
      rating: 5
    },
    {
      quote: "[There is] nothing [that you guys can do better]",
      type: "Recommendation",
      rating: 5
    }
  ];

  const stats = [
    { value: "4.80", label: "Average Rating", icon: "⭐" },
    { value: "4/5", label: "Would Sign Up for Part 2", icon: "🔄" },
    { value: "20+", label: "Students Taught", icon: "👨‍🎓" }
  ];

  return (
    <section id="testimonials" ref={elementRef} className="py-20 px-4 bg-section-gradient">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-on-scroll animate-in' : 'animate-on-scroll'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground">
            Student Feedback
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            See what our students have to say about their learning experience
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`${isVisible ? 'animate-on-scroll-scale animate-in' : 'animate-on-scroll-scale'} stagger-delay-${index + 1}`}
              >
                <Card className="text-center p-8 bg-gradient-card border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`${isVisible ? 'animate-on-scroll-enhanced animate-in' : 'animate-on-scroll-enhanced'} stagger-delay-${(index % 3) + 1}`}
            >
              <Card className="h-full card-hover bg-card border-border shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                    <blockquote className="text-card-foreground leading-relaxed flex-1">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {testimonial.type}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
