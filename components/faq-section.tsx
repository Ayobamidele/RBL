import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Is RBL a trusted platform?",
      answer:
        "Yes, Road to Battle League (RBL) is a trusted platform where you can search for tournaments both free and paid. In addition, RBL also provides tournaments for various types of games.",
    },
    {
      question: "How can I cash out the prize I got from the tournament?",
      answer:
        "Prize distribution is handled through our secure payment system. Winners will be contacted directly by our team with instructions on how to claim their prizes. Payment methods include bank transfer, PayPal, and other popular options.",
    },
    {
      question: "Can I find a team to compete with?",
      answer:
        "Our Discord community is the perfect place to find teammates. We have dedicated channels for team formation where you can connect with players of similar skill levels and interests.",
    },
    {
      question: "Can I create my own tournament?",
      answer:
        "Yes! We offer tournament creation tools for community organizers. Contact our team through Discord or the contact form to learn more about hosting your own tournament on the RBL platform.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">FAQ</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 bg-card border border-border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Do you want to join or create tournament with various prizepool?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button size="lg" className="px-8">
                Create Tournament
              </Button>
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Join Tournament
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
