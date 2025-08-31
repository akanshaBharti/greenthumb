import { motion } from "framer-motion";
import { Button } from ".././/components/ui/button";
import { Card, CardContent } from ".././/components/ui/card";
import { SEO } from ".././/components/ui/SEO";
import { Leaf, Sprout, Home as HomeIcon, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const featuredPlants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    description: "Perfect for bright, indirect light",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "Low maintenance, air purifying",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    description: "Statement plant for any room",
    price: 78,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    id: 4,
    name: "Peace Lily",
    description: "Beautiful flowering houseplant",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
];

const services = [
  {
    icon: Sprout,
    title: "Plant Care",
    description:
      "Professional plant maintenance and health monitoring services",
  },
  {
    icon: HomeIcon,
    title: "Interior Design",
    description: "Custom plant arrangements and interior green space design",
  },
  {
    icon: Truck,
    title: "Delivery & Setup",
    description: "Safe delivery and professional installation of your plants",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Premium Indoor Plants & Arrangements"
        description="Discover premium indoor plants and professional plant arrangements. Expert plant care services and modern plant displays for your home and office."
        keywords="indoor plants, plant arrangements, plant care, gardening, plant services"
        ogImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630"
      />

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sprout className="w-16 h-16 text-primary" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 right-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <Leaf className="w-10 h-10 text-primary" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              Transform Your Space with{" "}
              <span className="text-primary">Premium Plants</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of indoor plants, expert
              arrangements, and professional plant care services to bring nature
              into your home and office.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="px-8 py-3 text-lg"
                data-testid="button-shop-plants"
                asChild
              >
                <Link href="/projects">Shop Plants</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
                data-testid="button-learn-more"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 hidden lg:block">
          <motion.img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
            alt="Modern indoor plant arrangement"
            className="w-96 h-64 object-cover rounded-tl-3xl opacity-80"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            data-testid="img-hero-plant"
          />
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Featured Plants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked selection of our most popular and beautiful indoor
              plants
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPlants.map((plant, index) => (
              <motion.div
                key={plant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                data-testid={`card-plant-${plant.id}`}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      data-testid={`img-plant-${plant.id}`}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3
                      className="text-xl font-semibold mb-2 text-foreground"
                      data-testid={`text-plant-name-${plant.id}`}
                    >
                      {plant.name}
                    </h3>
                    <p
                      className="text-muted-foreground mb-4"
                      data-testid={`text-plant-description-${plant.id}`}
                    >
                      {plant.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span
                        className="text-2xl font-bold text-primary"
                        data-testid={`text-plant-price-${plant.id}`}
                      >
                        ${plant.price}
                      </span>
                      <Button
                        size="sm"
                        data-testid={`button-add-to-cart-${plant.id}`}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert plant care and design services for every space
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-testid={`service-${service.title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
