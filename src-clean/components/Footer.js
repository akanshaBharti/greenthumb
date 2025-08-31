import { Leaf, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const quickLinks = [{
  name: "Home",
  href: "/"
}, {
  name: "About Us",
  href: "/about"
}, {
  name: "Services",
  href: "/services"
}, {
  name: "Projects",
  href: "/projects"
}, {
  name: "Blog",
  href: "/blog"
}, {
  name: "Contact",
  href: "/contact"
}];
const services = ["Plant Care", "Interior Design", "Plant Delivery", "Consultation", "Maintenance", "Workshops"];
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
export function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-slate-900 text-slate-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8 py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2"
  }, /*#__PURE__*/React.createElement(motion.div, {
    className: "flex items-center space-x-2 mb-4",
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
    }
  }, /*#__PURE__*/React.createElement(Leaf, {
    className: "text-2xl text-primary"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-bold text-white"
  }, "GreenThumb")), /*#__PURE__*/React.createElement(motion.p, {
    className: "text-slate-400 mb-6 max-w-md",
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
      delay: 0.1
    }
  }, "Transforming spaces with premium plants and expert care. We're your partners in creating beautiful, healthy indoor environments that enhance your life and wellbeing."), /*#__PURE__*/React.createElement(motion.div, {
    className: "flex space-x-4",
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
      delay: 0.2
    }
  }, socialLinks.map((social, index) => {
    const Icon = social.icon;
    return /*#__PURE__*/React.createElement(motion.a, {
      key: social.name,
      href: social.href,
      "data-testid": `social-${social.name.toLowerCase()}`,
      className: "w-10 h-10 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200",
      whileHover: {
        scale: 1.1,
        y: -2
      },
      whileTap: {
        scale: 0.9
      },
      initial: {
        opacity: 0,
        scale: 0
      },
      whileInView: {
        opacity: 1,
        scale: 1
      },
      viewport: {
        once: true
      },
      transition: {
        delay: 0.3 + index * 0.1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "w-5 h-5"
    }), /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, social.name));
  }))), /*#__PURE__*/React.createElement(motion.div, {
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
      delay: 0.3
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold text-white mb-4"
  }, "Quick Links"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2"
  }, quickLinks.map(link => /*#__PURE__*/React.createElement("li", {
    key: link.name
  }, /*#__PURE__*/React.createElement(Link, {
    href: link.href,
    "data-testid": `footer-${link.name.toLowerCase().replace(' ', '-')}`
  }, /*#__PURE__*/React.createElement("a", {
    className: "hover:text-primary transition-colors duration-200"
  }, link.name)))))), /*#__PURE__*/React.createElement(motion.div, {
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
      delay: 0.4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold text-white mb-4"
  }, "Services"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2"
  }, services.map(service => /*#__PURE__*/React.createElement("li", {
    key: service
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-primary transition-colors duration-200",
    "data-testid": `service-${service.toLowerCase().replace(' ', '-')}`
  }, service)))))), /*#__PURE__*/React.createElement(motion.div, {
    className: "border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center",
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1
    },
    viewport: {
      once: true
    },
    transition: {
      delay: 0.5
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-sm mb-4 md:mb-0"
  }, "\xA9 2024 GreenThumb. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-6 text-sm"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-primary transition-colors duration-200",
    "data-testid": "privacy-policy"
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-primary transition-colors duration-200",
    "data-testid": "terms-of-service"
  }, "Terms of Service"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover:text-primary transition-colors duration-200",
    "data-testid": "cookie-policy"
  }, "Cookie Policy")))));
}