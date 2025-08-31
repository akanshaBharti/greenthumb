function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MapPin, Phone, Mail, Clock, ChevronDown, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
const contactFormSchema = insertContactSubmissionSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});
const contactInfo = [{
  icon: MapPin,
  title: "Address",
  content: ["123 Green Street", "Plant District, PL 12345", "United States"]
}, {
  icon: Phone,
  title: "Phone",
  content: ["(555) 123-PLANT", "(555) 123-7526"]
}, {
  icon: Mail,
  title: "Email",
  content: ["hello@greenthumb.com", "care@greenthumb.com"]
}, {
  icon: Clock,
  title: "Hours",
  content: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
}];
const faqs = [{
  question: "How often should I water my plants?",
  answer: "Watering frequency depends on the plant species, pot size, and environmental conditions. Generally, most houseplants prefer to dry out slightly between waterings. Check the soil moisture by inserting your finger about an inch into the soil."
}, {
  question: "Do you offer plant delivery services?",
  answer: "Yes! We offer both same-day local delivery and standard shipping. All plants are carefully packaged to ensure they arrive healthy and ready to thrive in their new home."
}, {
  question: "What's included in your plant care services?",
  answer: "Our plant care services include watering, pruning, fertilizing, pest monitoring, repotting when needed, and general health assessments. We create custom care schedules based on your specific plants and environment."
}, {
  question: "Can you help design a plant arrangement for my office?",
  answer: "Absolutely! We specialize in biophilic office design. We'll assess your space, lighting conditions, and maintenance requirements to create a beautiful, low-maintenance plant arrangement that improves air quality and employee wellbeing."
}];
const socialLinks = [{
  name: "Instagram",
  icon: Instagram,
  href: "#"
}, {
  name: "Facebook",
  icon: Facebook,
  href: "#"
}, {
  name: "Twitter",
  icon: Twitter,
  href: "#"
}, {
  name: "Youtube",
  icon: Youtube,
  href: "#"
}];
export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const {
    toast
  } = useToast();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset,
    setValue,
    watch
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });
  const contactMutation = useMutation({
    mutationFn: data => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your message! We'll get back to you soon."
      });
      reset();
      queryClient.invalidateQueries({
        queryKey: ['/api/contact']
      });
    },
    onError: error => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit contact form",
        variant: "destructive"
      });
    }
  });
  const onSubmit = data => {
    contactMutation.mutate(data);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SEO, {
    title: "Contact Us - Plant Care & Design Services",
    description: "Ready to transform your space with plants? Contact GreenThumb for expert plant care, design services, and consultation. Get in touch with our plant specialists today.",
    keywords: "contact greenthumb, plant consultation, plant services, plant care contact, plant design services"
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-20 bg-gradient-to-br from-primary-50 to-muted dark:from-primary-900/20 dark:to-muted pt-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center"
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl sm:text-5xl font-bold mb-6 text-foreground"
  }, "Get in Touch"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-muted-foreground max-w-3xl mx-auto"
  }, "Ready to transform your space with plants? Have questions about plant care? We'd love to hear from you and help bring your green vision to life.")))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 bg-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-12"
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: -50
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
      once: true
    }
  }, /*#__PURE__*/React.createElement(Card, {
    className: "p-8"
  }, /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold mb-6 text-foreground"
  }, "Send us a Message"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "space-y-6",
    "data-testid": "form-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "firstName"
  }, "First Name *"), /*#__PURE__*/React.createElement(Input, _extends({
    id: "firstName"
  }, register("firstName"), {
    className: errors.firstName ? "border-destructive" : "",
    "data-testid": "input-first-name"
  })), errors.firstName && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-destructive mt-1"
  }, errors.firstName.message)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "lastName"
  }, "Last Name *"), /*#__PURE__*/React.createElement(Input, _extends({
    id: "lastName"
  }, register("lastName"), {
    className: errors.lastName ? "border-destructive" : "",
    "data-testid": "input-last-name"
  })), errors.lastName && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-destructive mt-1"
  }, errors.lastName.message))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "email"
  }, "Email Address *"), /*#__PURE__*/React.createElement(Input, _extends({
    id: "email",
    type: "email"
  }, register("email"), {
    className: errors.email ? "border-destructive" : "",
    "data-testid": "input-email"
  })), errors.email && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-destructive mt-1"
  }, errors.email.message)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "phone"
  }, "Phone Number"), /*#__PURE__*/React.createElement(Input, _extends({
    id: "phone",
    type: "tel"
  }, register("phone"), {
    "data-testid": "input-phone"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "service"
  }, "Service Interested In"), /*#__PURE__*/React.createElement(Select, {
    onValueChange: value => setValue("service", value),
    "data-testid": "select-service"
  }, /*#__PURE__*/React.createElement(SelectTrigger, null, /*#__PURE__*/React.createElement(SelectValue, {
    placeholder: "Select a service"
  })), /*#__PURE__*/React.createElement(SelectContent, null, /*#__PURE__*/React.createElement(SelectItem, {
    value: ""
  }, "Select a service"), /*#__PURE__*/React.createElement(SelectItem, {
    value: "plant-care"
  }, "Plant Care"), /*#__PURE__*/React.createElement(SelectItem, {
    value: "interior-design"
  }, "Interior Design"), /*#__PURE__*/React.createElement(SelectItem, {
    value: "plant-delivery"
  }, "Plant Delivery"), /*#__PURE__*/React.createElement(SelectItem, {
    value: "consultation"
  }, "Consultation"), /*#__PURE__*/React.createElement(SelectItem, {
    value: "maintenance"
  }, "Ongoing Maintenance"), /*#__PURE__*/React.createElement(SelectItem, {
    value: "other"
  }, "Other")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "message"
  }, "Message *"), /*#__PURE__*/React.createElement(Textarea, _extends({
    id: "message",
    rows: 5,
    placeholder: "Tell us about your project, questions, or how we can help you..."
  }, register("message"), {
    className: errors.message ? "border-destructive" : "",
    "data-testid": "textarea-message"
  })), errors.message && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-destructive mt-1"
  }, errors.message.message)), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    className: "w-full",
    disabled: contactMutation.isPending,
    "data-testid": "button-submit-contact"
  }, contactMutation.isPending ? "Sending..." : "Send Message"))))), /*#__PURE__*/React.createElement(motion.div, {
    className: "space-y-8",
    initial: {
      opacity: 0,
      x: 50
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
      once: true
    },
    transition: {
      delay: 0.2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-semibold mb-6 text-foreground"
  }, "Contact Information"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, contactInfo.map((info, index) => {
    const Icon = info.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: info.title,
      className: "flex items-start space-x-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "w-5 h-5 text-primary"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-semibold text-foreground"
    }, info.title), /*#__PURE__*/React.createElement("div", {
      className: "text-muted-foreground"
    }, info.content.map((line, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      "data-testid": `contact-info-${info.title.toLowerCase()}-${i}`
    }, line)))));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold mb-4 text-foreground"
  }, "Follow Us"), /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-4"
  }, socialLinks.map(social => {
    const Icon = social.icon;
    return /*#__PURE__*/React.createElement(motion.a, {
      key: social.name,
      href: social.href,
      className: "w-12 h-12 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg flex items-center justify-center transition-colors duration-200",
      whileHover: {
        scale: 1.05
      },
      whileTap: {
        scale: 0.95
      },
      "data-testid": `social-${social.name.toLowerCase()}`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "w-5 h-5"
    }), /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, social.name));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-muted rounded-xl h-64 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center text-muted-foreground"
  }, /*#__PURE__*/React.createElement(MapPin, {
    className: "w-12 h-12 mx-auto mb-2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-medium"
  }, "Interactive Map"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Google Maps integration would go here"))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 bg-muted/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement(motion.div, {
    className: "text-center mb-12",
    initial: {
      opacity: 0,
      y: 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-foreground mb-4"
  }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-muted-foreground"
  }, "Quick answers to common questions")), /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto space-y-4"
  }, faqs.map((faq, index) => /*#__PURE__*/React.createElement(motion.div, {
    key: index,
    initial: {
      opacity: 0,
      y: 20
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      delay: index * 0.1
    },
    "data-testid": `faq-${index}`
  }, /*#__PURE__*/React.createElement(Collapsible, {
    open: openFaq === index,
    onOpenChange: isOpen => setOpenFaq(isOpen ? index : null)
  }, /*#__PURE__*/React.createElement(CollapsibleTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement(Card, {
    className: "cursor-pointer hover:bg-accent/50 transition-colors duration-200"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-medium text-foreground text-left",
    "data-testid": `faq-question-${index}`
  }, faq.question), /*#__PURE__*/React.createElement(ChevronDown, {
    className: `w-5 h-5 text-muted-foreground transition-transform duration-200 ${openFaq === index ? "transform rotate-180" : ""}`
  }))))), /*#__PURE__*/React.createElement(CollapsibleContent, null, /*#__PURE__*/React.createElement("div", {
    className: "px-6 pb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground",
    "data-testid": `faq-answer-${index}`
  }, faq.answer))))))))));
}