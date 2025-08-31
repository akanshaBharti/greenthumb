import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
const filterButtons = [{
  key: "all",
  label: "All"
}, {
  key: "care",
  label: "Plant Care"
}, {
  key: "design",
  label: "Design"
}, {
  key: "tips",
  label: "Tips"
}];
const featuredArticle = {
  title: "Complete Guide to Monstera Care: From Beginner to Expert",
  description: "Discover everything you need to know about caring for your Monstera deliciosa. From watering schedules to propagation techniques, become a Monstera expert.",
  author: "Sarah Johnson",
  date: "March 15, 2024",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
  authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50"
};
const blogPosts = [{
  id: 1,
  title: "Snake Plant Care: The Ultimate Low-Maintenance Guide",
  description: "Perfect for beginners, learn how to keep your snake plant thriving with minimal effort.",
  category: "care",
  date: "March 10, 2024",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
}, {
  id: 2,
  title: "10 Interior Design Rules Every Plant Parent Should Know",
  description: "Transform your space with strategic plant placement and design principles.",
  category: "design",
  date: "March 8, 2024",
  readTime: "7 min read",
  image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
}, {
  id: 3,
  title: "Plant Propagation 101: Grow Your Collection for Free",
  description: "Learn simple propagation techniques to expand your plant family without spending a dime.",
  category: "tips",
  date: "March 5, 2024",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
}, {
  id: 4,
  title: "Seasonal Plant Care: Adapting to Winter Conditions",
  description: "Help your plants thrive through seasonal changes with these expert tips.",
  category: "care",
  date: "March 3, 2024",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1469359331800-dd65d44c0cfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
}, {
  id: 5,
  title: "Small Space, Big Impact: Apartment Plant Design",
  description: "Maximize your plant collection in limited space with these clever design strategies.",
  category: "design",
  date: "March 1, 2024",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
}, {
  id: 6,
  title: "Plant SOS: Diagnosing Common Plant Problems",
  description: "Quick guide to identifying and solving the most common houseplant issues.",
  category: "tips",
  date: "February 28, 2024",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
}];
export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [email, setEmail] = useState("");
  const {
    toast
  } = useToast();
  const queryClient = useQueryClient();
  const newsletterMutation = useMutation({
    mutationFn: data => apiRequest('POST', '/api/newsletter', data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!"
      });
      setEmail("");
      queryClient.invalidateQueries({
        queryKey: ['/api/newsletter']
      });
    },
    onError: error => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe to newsletter",
        variant: "destructive"
      });
    }
  });
  const filteredPosts = blogPosts.filter(post => activeFilter === "all" || post.category === activeFilter);
  const handleNewsletterSubmit = e => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    newsletterMutation.mutate({
      email
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SEO, {
    title: "Plant Care Blog & Expert Tips",
    description: "Expert tips, guides, and insights to help you become a better plant parent. Learn from our team of horticulturists and plant enthusiasts.",
    keywords: "plant care blog, plant tips, plant care guides, houseplant advice, plant care articles"
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-20 bg-gradient-to-br from-muted to-primary-50 dark:from-muted dark:to-primary-900/20 pt-32"
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
  }, "Plant Care Blog"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-muted-foreground max-w-3xl mx-auto"
  }, "Expert tips, guides, and insights to help you become a better plant parent. Learn from our team of horticulturists and plant enthusiasts.")))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 bg-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
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
  }, /*#__PURE__*/React.createElement("img", {
    src: featuredArticle.image,
    alt: featuredArticle.title,
    className: "rounded-xl shadow-xl w-full",
    "data-testid": "img-featured-article"
  })), /*#__PURE__*/React.createElement(motion.div, {
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
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary",
    className: "mb-4"
  }, "Featured Article"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl font-bold mb-4 text-foreground",
    "data-testid": "text-featured-title"
  }, featuredArticle.title), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-muted-foreground mb-6",
    "data-testid": "text-featured-description"
  }, featuredArticle.description), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-sm text-muted-foreground mb-6"
  }, /*#__PURE__*/React.createElement("img", {
    src: featuredArticle.authorImage,
    alt: featuredArticle.author,
    className: "w-8 h-8 rounded-full mr-3",
    "data-testid": "img-featured-author"
  }), /*#__PURE__*/React.createElement("span", {
    "data-testid": "text-featured-meta"
  }, featuredArticle.author, " \u2022 ", featuredArticle.date, " \u2022 ", featuredArticle.readTime)), /*#__PURE__*/React.createElement(Button, {
    "data-testid": "button-read-featured"
  }, "Read Full Article"))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 bg-muted/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row justify-between items-center mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-foreground mb-4 md:mb-0"
  }, "Latest Articles"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, filterButtons.map(button => /*#__PURE__*/React.createElement(Button, {
    key: button.key,
    variant: activeFilter === button.key ? "default" : "outline",
    size: "sm",
    onClick: () => setActiveFilter(button.key),
    "data-testid": `blog-filter-${button.key}`,
    className: "rounded-full"
  }, button.label)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, filteredPosts.map((post, index) => /*#__PURE__*/React.createElement(motion.article, {
    key: post.id,
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: index * 0.1
    },
    whileHover: {
      y: -5
    },
    "data-testid": `blog-post-${post.id}`
  }, /*#__PURE__*/React.createElement(Card, {
    className: "overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
  }, /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: post.title,
    className: "w-full h-48 object-cover",
    "data-testid": `img-blog-${post.id}`
  }), /*#__PURE__*/React.createElement(CardContent, {
    className: "p-6 flex flex-col h-full"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary",
    className: "text-xs uppercase tracking-wider mb-2 w-fit",
    "data-testid": `badge-category-${post.id}`
  }, post.category), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold mb-3 text-foreground leading-tight flex-grow",
    "data-testid": `text-title-${post.id}`
  }, post.title), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground mb-4 flex-grow",
    "data-testid": `text-description-${post.id}`
  }, post.description), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-sm text-muted-foreground"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement(Calendar, {
    className: "w-4 h-4 mr-2"
  }), /*#__PURE__*/React.createElement("span", {
    "data-testid": `text-date-${post.id}`
  }, post.date)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement(Clock, {
    className: "w-4 h-4 mr-1"
  }), /*#__PURE__*/React.createElement("span", {
    "data-testid": `text-read-time-${post.id}`
  }, post.readTime)))))))), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-12"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    "data-testid": "button-load-more"
  }, "Load More Articles")))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 bg-primary text-primary-foreground"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center"
  }, /*#__PURE__*/React.createElement(motion.div, {
    className: "max-w-2xl mx-auto",
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
    className: "text-3xl sm:text-4xl font-bold mb-4"
  }, "Stay Updated"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-primary-foreground/80 mb-8"
  }, "Get the latest plant care tips, new articles, and exclusive content delivered to your inbox weekly."), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleNewsletterSubmit,
    className: "flex flex-col sm:flex-row gap-4 max-w-lg mx-auto",
    "data-testid": "form-newsletter"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "Enter your email address",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: "flex-1 bg-white text-slate-900",
    "data-testid": "input-newsletter-email",
    disabled: newsletterMutation.isPending
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "secondary",
    disabled: newsletterMutation.isPending,
    "data-testid": "button-newsletter-subscribe"
  }, newsletterMutation.isPending ? "Subscribing..." : "Subscribe"))))));
}