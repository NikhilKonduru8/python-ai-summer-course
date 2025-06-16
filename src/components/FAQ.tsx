
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need my own computer for these lessons?",
      answer: "Yes. You will need to use your own computer for this course. It is recommended to use your own personal computer and not your school issued chromebook, but anything will do."
    },
    {
      question: "What will happen if I miss a class?",
      answer: "We will be posting recordings of the meetings and slides with information in our Google Classroom after every class."
    },
    {
      question: "Is there any course material that I can review?",
      answer: "We HIGHLY recommend reviewing your python fundamentals using these resources: W3 Schools Python Tutorial: https://www.w3schools.com/python/, 30-minute Python Introduction Video: youtu.be/Ro_MScTDfU4?si=LUzsiua7dTu_LDy6"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about the course and what you need to get started
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
