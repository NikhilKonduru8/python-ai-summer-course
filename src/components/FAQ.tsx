

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
      answer: (
        <div className="space-y-3">
          <p>We HIGHLY recommend reviewing your Python fundamentals using these resources:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start">
              <span className="text-muted-foreground mr-2">•</span>
              <div>
                <strong>W3 Schools Python Tutorial:</strong>{" "}
                <a 
                  href="https://www.w3schools.com/python/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors break-all"
                >
                  https://www.w3schools.com/python/
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-muted-foreground mr-2">•</span>
              <div>
                <strong>30-minute Python Introduction Video:</strong>{" "}
                <a 
                  href="https://youtu.be/Ro_MScTDfU4?si=LUzsiua7dTu_LDy6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors break-all"
                >
                  youtu.be/Ro_MScTDfU4?si=LUzsiua7dTu_LDy6
                </a>
              </div>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Common questions about the course and what you need to get started
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm px-4 md:px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-card-foreground hover:text-accent transition-colors py-4 leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4 text-sm md:text-base">
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

