
import Navigation from "@/components/Navigation";
import ThreeBackground from "@/components/ThreeBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      name: "Arnav Garg",
      email: "gargarnav10@gmail.com",
      role: "Lead Instructor",
      avatar: "👨‍🎓"
    },
    {
      name: "Nikhil Konduru", 
      email: "nikhilkonduru8@gmail.com",
      role: "Lead Instructor",
      avatar: "👨‍💻"
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
            <Button variant="outline" className="mb-8 border-white text-black bg-white hover:bg-white/90" asChild>
              <a href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
                Get in Touch
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Have questions about our courses? Need help with registration? 
                We're here to help you start your Python journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 px-4 bg-section-gradient">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {contactInfo.map((instructor, index) => (
                <Card key={index} className="card-hover bg-card border-border shadow-lg">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                      {instructor.avatar}
                    </div>
                    <CardTitle className="text-2xl text-card-foreground">{instructor.name}</CardTitle>
                    <p className="text-muted-foreground">{instructor.role}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Mail className="w-5 h-5 text-primary" />
                      <a 
                        href={`mailto:${instructor.email}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {instructor.email}
                      </a>
                    </div>
                    <Button className="w-full" asChild>
                      <a href={`mailto:${instructor.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center card-hover bg-card border-border shadow-lg">
                <CardContent className="p-8">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Questions?</h3>
                  <p className="text-muted-foreground mb-4">
                    Have questions about the curriculum, prerequisites, or registration process?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Email us anytime - we typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover bg-card border-border shadow-lg">
                <CardContent className="p-8">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Response Time</h3>
                  <p className="text-muted-foreground mb-4">
                    We aim to respond to all inquiries within 24 hours during weekdays.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For urgent matters, please mention "URGENT" in your subject line
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover bg-card border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Ready to Register?</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to start your Python journey? Use our registration form.
                  </p>
                  <Button asChild>
                    <a href="https://forms.gle/HaU79P3qhA4pCdhr5" target="_blank" rel="noopener noreferrer">
                      Register Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
