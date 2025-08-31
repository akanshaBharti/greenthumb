import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/ui/SEO";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { MapPin, Phone, Mail, Clock, ChevronDown, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { apiRequest } from "../lib/queryClient";
// import { insertContactSubmissionSchema } from "../shared/schema";
// import { useToast } from "../hooks/use-toast";
// import { z } from "zod";

// const contactFormSchema = insertContactSubmissionSchema.extend({
//   // firstName: z.string().min(1, "First name is required"),
//   // lastName: z.string().min(1, "Last name is required"),
//   // email: z.string().email("Please enter a valid email address"),
//   // message: z.string().min(10, "Message must be at least 10 characters long"),
// });

const contactInfo = [
  { icon: MapPin, title: "Address", content: ["123 Green Street", "Plant District, PL 12345", "United States"] },
  { icon: Phone, title: "Phone", content: ["(555) 123-PLANT", "(555) 123-7526"] },
  { icon: Mail, title: "Email", content: ["hello@greenthumb.com", "care@greenthumb.com"] },
  { icon: Clock, title: "Hours", content: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"] },
];

const faqs = [
  { question: "How often should I water my plants?", answer: "Watering depends on species, pot size, and environment." },
  { question: "Do you offer plant delivery services?", answer: "Yes! We offer same-day local delivery and shipping." },
  { question: "What's included in your plant care services?", answer: "Watering, pruning, fertilizing, pest monitoring, and repotting." },
  { question: "Can you help design a plant arrangement for my office?", answer: "Absolutely! We do biophilic office design tailored to your space." },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  // const { toast } = useToast();
  // const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    // resolver: zodResolver(contactFormSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }
  });

  // const contactMutation = useMutation({
  //   mutationFn: (data) => apiRequest("POST", "/api/contact", data),
  //   onSuccess: () => {
  //     toast({ title: "Success!", description: "Thank you for your message! We'll get back to you soon." });
  //     reset();
  //     queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
  //   },
  //   onError: (error) => {
  //     toast({ title: "Error", description: error.message || "Failed to submit contact form", variant: "destructive" });
  //   }
  // });

  // const onSubmit = (data) => contactMutation.mutate(data);


  return (
    <>
      <SEO 
        title="Contact Us - Plant Care & Design Services"
        description="Ready to transform your space with plants? Contact GreenThumb for plant care and design services."
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-muted pt-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Ready to transform your space with plants? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="p-8">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form 
                // onSubmit={handleSubmit(onSubmit)} 
                className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" {...register("firstName")} className={errors.firstName ? "border-destructive" : ""} />
                      {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" {...register("lastName")} className={errors.lastName ? "border-destructive" : ""} />
                      {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" {...register("email")} className={errors.email ? "border-destructive" : ""} />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" {...register("phone")} />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select onValueChange={(value) => setValue("service", value)}>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem >Select a service</SelectItem>
                        <SelectItem value="plant-care">Plant Care</SelectItem>
                        <SelectItem value="interior-design">Interior Design</SelectItem>
                        <SelectItem value="plant-delivery">Plant Delivery</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" rows={5} {...register("message")} className={errors.message ? "border-destructive" : ""} />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  </div>

                  {/* <Button type="submit" className="w-full" disabled={contactMutation.isPending}>
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button> */}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div className="space-y-8" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{info.title}</h3>
                        {info.content.map((line, i) => <p key={i}>{line}</p>)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a key={social.name} href={social.href} className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>Google Maps integration here</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg">Quick answers to common questions</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} open={openFaq === index} onOpenChange={(isOpen) => setOpenFaq(isOpen ? index : null)}>
                <CollapsibleTrigger asChild>
                  <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                    <CardContent className="p-6 flex justify-between items-center">
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                    </CardContent>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-4">
                    <p>{faq.answer}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
