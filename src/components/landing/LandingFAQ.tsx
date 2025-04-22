import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function LandingFAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What makes our AI headshots unique?</AccordionTrigger>
              <AccordionContent>
                Our AI technology analyzes your selfies to generate professional headshots that look like they were taken by a professional photographer.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How many photos do I need to upload?</AccordionTrigger>
              <AccordionContent>
                We recommend uploading 6-8 selfies with different angles and expressions for the best results.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>What is your refund policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 100% no-questions-asked money-back guarantee. If you're not completely satisfied with your headshots, we'll refund your full payment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>How long does it take to get my headshots?</AccordionTrigger>
              <AccordionContent>
                Most headshots are generated within a few hours. During peak times, it may take up to 24 hours.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>What do you do with my data?</AccordionTrigger>
              <AccordionContent>
                We prioritize your privacy. Your photos are processed securely and never shared with third parties. They are deleted after processing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
