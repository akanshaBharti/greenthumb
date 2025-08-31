import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Users, Leaf } from "lucide-react";
const stats = [{
  value: "500+",
  label: "Happy Customers"
}, {
  value: "50+",
  label: "Plant Varieties"
}, {
  value: "5+",
  label: "Years Experience"
}];
const team = [{
  name: "Sarah Johnson",
  role: "Head of Plant Care",
  description: "15+ years in horticulture and plant health",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
}, {
  name: "Michael Chen",
  role: "Lead Designer",
  description: "Specialized in biophilic interior design",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
}, {
  name: "Emma Rodriguez",
  role: "Customer Experience",
  description: "Ensuring every customer finds their perfect plant",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
}];
const values = [{
  icon: Heart,
  title: "Passion",
  description: "Deep love for plants and their positive impact on life"
}, {
  icon: Star,
  title: "Quality",
  description: "Only the healthiest, most beautiful plants make it to you"
}, {
  icon: Users,
  title: "Community",
  description: "Building a community of plant enthusiasts"
}, {
  icon: Leaf,
  title: "Sustainability",
  description: "Environmentally conscious practices in everything we do"
}];
export default function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SEO, {
    title: "About GreenThumb - Plant Care Experts",
    description: "Learn about GreenThumb's mission to bring premium plants and expert care to every space. Meet our team of plant specialists and discover our values.",
    keywords: "about greenthumb, plant experts, plant care team, plant nursery, indoor plants"
  }), /*#__PURE__*/React.createElement("section", {
    className: "py-20 bg-gradient-to-br from-primary-50 to-muted dark:from-primary-900/20 dark:to-muted pt-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: -50
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      duration: 0.8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl sm:text-5xl font-bold mb-6 text-foreground"
  }, "About GreenThumb"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-muted-foreground mb-6"
  }, "We're passionate about bringing the beauty and benefits of plants into every space. Founded in 2018, GreenThumb has grown from a small local nursery to a premier destination for plant lovers and interior designers alike."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-muted-foreground mb-8"
  }, "Our team of plant experts, horticulturists, and designers work together to provide not just beautiful plants, but complete green living solutions that enhance your wellbeing and transform your environment."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, stats.map((stat, index) => /*#__PURE__*/React.createElement(motion.div, {
    key: stat.label,
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.2 + index * 0.1
    },
    "data-testid": `stat-${stat.label.toLowerCase().replace(' ', '-')}`
  }, /*#__PURE__*/React.createElement(Card, {
    className: "text-center p-4"
  }, /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-bold text-primary"
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-muted-foreground"
  }, stat.label))))))), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Modern greenhouse with diverse plants",
    className: "rounded-xl shadow-xl w-full",
    "data-testid": "img-greenhouse"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 bg-card"
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
    className: "text-3xl sm:text-4xl font-bold mb-4 text-foreground"
  }, "Meet Our Team"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-muted-foreground"
  }, "Plant experts dedicated to helping you grow")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, team.map((member, index) => /*#__PURE__*/React.createElement(motion.div, {
    key: member.name,
    className: "text-center",
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
    },
    transition: {
      delay: index * 0.1
    },
    "data-testid": `team-member-${member.name.toLowerCase().replace(' ', '-')}`
  }, /*#__PURE__*/React.createElement(motion.img, {
    src: member.image,
    alt: member.name,
    className: "w-32 h-32 rounded-full mx-auto mb-4 object-cover",
    whileHover: {
      scale: 1.05
    },
    "data-testid": `img-team-${member.name.toLowerCase().replace(' ', '-')}`
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold mb-2 text-foreground"
  }, member.name), /*#__PURE__*/React.createElement("p", {
    className: "text-primary mb-2"
  }, member.role), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground"
  }, member.description)))))), /*#__PURE__*/React.createElement("section", {
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
    className: "text-3xl sm:text-4xl font-bold mb-4 text-foreground"
  }, "Our Mission"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-muted-foreground max-w-3xl mx-auto"
  }, "To make plant ownership accessible, enjoyable, and beneficial for everyone by providing high-quality plants, expert guidance, and ongoing support.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  }, values.map((value, index) => {
    const Icon = value.icon;
    return /*#__PURE__*/React.createElement(motion.div, {
      key: value.title,
      className: "text-center p-6",
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
      },
      transition: {
        delay: index * 0.1
      },
      "data-testid": `value-${value.title.toLowerCase()}`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "w-12 h-12 text-primary mx-auto mb-4"
    }), /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-semibold mb-2 text-foreground"
    }, value.title), /*#__PURE__*/React.createElement("p", {
      className: "text-muted-foreground"
    }, value.description));
  })))));
}