import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/ui/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
const filterButtons = [{
  key: "all",
  label: "All Projects"
}, {
  key: "residential",
  label: "Residential"
}, {
  key: "commercial",
  label: "Commercial"
}, {
  key: "outdoor",
  label: "Outdoor"
}];
const projects = [{
  id: 1,
  title: "Modern Downtown Loft",
  category: "residential",
  description: "Complete transformation with statement plants and green walls",
  date: "March 2024",
  image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
}, {
  id: 2,
  title: "Tech Startup Office",
  category: "commercial",
  description: "Biophilic design for improved employee wellbeing",
  date: "February 2024",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
}, {
  id: 3,
  title: "Green Bistro Design",
  category: "commercial",
  description: "Creating an urban jungle dining experience",
  date: "January 2024",
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
}, {
  id: 4,
  title: "Botanical Bedroom",
  category: "residential",
  description: "Creating a serene plant-filled sleeping sanctuary",
  date: "December 2023",
  image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
}, {
  id: 5,
  title: "Rooftop Garden Oasis",
  category: "outdoor",
  description: "Urban outdoor space with weather-resistant plants",
  date: "November 2023",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
}, {
  id: 6,
  title: "Culinary Herb Kitchen",
  category: "residential",
  description: "Functional herb garden integrated into kitchen design",
  date: "October 2023",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
}];
const projectStats = [{
  value: "150+",
  label: "Projects Completed"
}, {
  value: "500+",
  label: "Plants Installed"
}, {
  value: "98%",
  label: "Client Satisfaction"
}, {
  value: "50+",
  label: "Plant Species Used"
}];
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProjects = projects.filter(project => activeFilter === "all" || project.category === activeFilter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SEO, {
    title: "Plant Design Projects & Installations",
    description: "Explore our portfolio of stunning plant installations and green space transformations. From cozy homes to corporate offices, see how we bring nature indoors.",
    keywords: "plant projects, interior plant design, plant installations, office plants, home plant arrangements"
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
  }, "Our Projects"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-muted-foreground max-w-3xl mx-auto"
  }, "Explore our portfolio of stunning plant installations and green space transformations. From cozy homes to corporate offices, see how we bring nature indoors.")))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 bg-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement(motion.div, {
    className: "flex flex-wrap justify-center gap-4 mb-12",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.2
    }
  }, filterButtons.map(button => /*#__PURE__*/React.createElement(Button, {
    key: button.key,
    variant: activeFilter === button.key ? "default" : "outline",
    onClick: () => setActiveFilter(button.key),
    "data-testid": `filter-${button.key}`,
    className: "rounded-full px-6"
  }, button.label))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, filteredProjects.map((project, index) => /*#__PURE__*/React.createElement(motion.div, {
    key: project.id,
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
    "data-testid": `project-${project.id}`
  }, /*#__PURE__*/React.createElement(Card, {
    className: "overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: project.image,
    alt: project.title,
    className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300",
    "data-testid": `img-project-${project.id}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
  })), /*#__PURE__*/React.createElement(CardContent, {
    className: "p-6"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary",
    className: "text-xs uppercase tracking-wider mb-2",
    "data-testid": `badge-category-${project.id}`
  }, project.category), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold mb-2 text-foreground",
    "data-testid": `text-title-${project.id}`
  }, project.title), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground mb-4",
    "data-testid": `text-description-${project.id}`
  }, project.description), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-sm text-muted-foreground"
  }, /*#__PURE__*/React.createElement(Calendar, {
    className: "w-4 h-4 mr-2"
  }), /*#__PURE__*/React.createElement("span", {
    "data-testid": `text-date-${project.id}`
  }, "Completed ", project.date))))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 bg-muted/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
  }, projectStats.map((stat, index) => /*#__PURE__*/React.createElement(motion.div, {
    key: stat.label,
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
    "data-testid": `stat-${stat.label.toLowerCase().replace(' ', '-')}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-3xl sm:text-4xl font-bold text-primary mb-2"
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    className: "text-muted-foreground"
  }, stat.label)))))));
}