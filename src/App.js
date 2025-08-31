import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

// Example page components
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-[Story Script]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Wrap every page with motion animation
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default App;
