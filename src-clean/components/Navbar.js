import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet"
import { Leaf, Menu, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
const navItems = [{
  name: "Home",
  href: "/"
}, {
  name: "About",
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
export function Navbar() {
  const location = useLocation();
  const {
    theme,
    setTheme
  } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return /*#__PURE__*/React.createElement(motion.nav, {
    initial: {
      y: -100
    },
    animate: {
      y: 0
    },
    className: "fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center h-16"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "/",
    "data-testid": "logo-link"
  }, /*#__PURE__*/React.createElement(motion.div, {
    className: "flex items-center space-x-2 cursor-pointer",
    whileHover: {
      scale: 1.05
    },
    whileTap: {
      scale: 0.95
    }
  }, /*#__PURE__*/React.createElement(Leaf, {
    className: "text-2xl text-primary"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-bold text-foreground"
  }, "GreenThumb"))), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center space-x-8"
  }, navItems.map(item => /*#__PURE__*/React.createElement(Link, {
    key: item.name,
    href: item.href,
    "data-testid": `nav-${item.name.toLowerCase()}`
  }, /*#__PURE__*/React.createElement(motion.a, {
    className: `text-sm font-medium transition-colors duration-200 hover:text-primary ${location === item.href ? "text-primary" : "text-muted-foreground"}`,
    whileHover: {
      y: -2
    },
    whileTap: {
      y: 0
    }
  }, item.name)))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-4"
  }, /*#__PURE__*/React.createElement("button", {
    variant: "ghost",
    size: "sm",
    onClick: toggleTheme,
    "data-testid": "theme-toggle",
    className: "rounded-full"
  }, /*#__PURE__*/React.createElement(Sun, {
    className: "h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  }), /*#__PURE__*/React.createElement(Moon, {
    className: "absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Toggle theme")), /*#__PURE__*/React.createElement(Sheet, {
    open: isOpen,
    onOpenChange: setIsOpen
  }, /*#__PURE__*/React.createElement(SheetTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement("button", {
    variant: "ghost",
    className: "md:hidden",
    size: "sm",
    "data-testid": "mobile-menu-trigger"
  }, /*#__PURE__*/React.createElement(Menu, {
    className: "h-5 w-5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Toggle menu"))), /*#__PURE__*/React.createElement(SheetContent, {
    side: "right",
    className: "w-[300px] sm:w-[400px]"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-col gap-4"
  }, navItems.map(item => /*#__PURE__*/React.createElement(Link, {
    key: item.name,
    href: item.href,
    "data-testid": `mobile-nav-${item.name.toLowerCase()}`
  }, /*#__PURE__*/React.createElement("a", {
    className: `block px-2 py-1 text-lg transition-colors hover:text-primary ${location === item.href ? "text-primary" : "text-muted-foreground"}`,
    onClick: () => setIsOpen(false)
  }, item.name))))))))));
}