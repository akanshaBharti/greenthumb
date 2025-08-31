import { motion } from "framer-motion"
import { SEO } from ".././components/ui/SEO"
import { Card, CardContent } from ".././components/ui/card"
import { Button } from ".././components/ui/button"
import { Separator } from ".././components/ui/separator"
import { Sprout, Home, Truck, HelpCircle } from "lucide-react"

const serviceCategories = [
  {
    icon: Sprout,
    title: "Plant Care Services",
    services: [
      { name: "Plant Health Assessment", price: 50 },
      { name: "Monthly Maintenance Visit", price: 75 },
      { name: "Plant Repotting Service", price: 40 },
      { name: "Emergency Plant Care", price: 100 },
    ]
  },
  {
    icon: Home,
    title: "Design & Installation",
    services: [
      { name: "Room Design Consultation", price: 150 },
      { name: "Custom Plant Arrangement", price: "200+" },
      { name: "Office Space Design", price: "500+" },
      { name: "Installation & Setup", price: 100 },
    ]
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    services: [
      { name: "Same-day delivery (local)", price: 25 },
      { name: "Standard delivery (2-3 days)", price: 15 },
      { name: "White-glove setup", price: 50 },
    ]
  },
  {
    icon: HelpCircle,
    title: "Support & Education",
    services: [
      { name: "Plant care workshop", price: 35 },
      { name: "1-on-1 plant consultation", price: 75 },
      { name: "Plant troubleshooting call", price: 25 },
    ]
  }
]

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "We assess your space and discuss your plant goals"
  },
  {
    step: 2,
    title: "Design",
    description: "Custom plant selection and arrangement planning"
  },
  {
    step: 3,
    title: "Installation", 
    description: "Professional delivery and setup of your plants"
  },
  {
    step: 4,
    title: "Support",
    description: "Ongoing care guidance and maintenance services"
  }
]

export default function Services() {
  return (
    <>
      <SEO 
        title="Plant Services - Care, Design & Delivery"
        description="Comprehensive plant services including expert care, interior design, delivery, and ongoing support. Professional plant solutions for homes and offices."
        keywords="plant care services, plant interior design, plant delivery, plant consultation, plant maintenance"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-primary-50 dark:from-muted dark:to-primary-900/20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From plant selection to ongoing care, we provide comprehensive services to help you create 
              and maintain beautiful green spaces in your home or office.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-testid={`service-category-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <Card className="p-8 h-full">
                    <CardContent className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {category.services.map((service, serviceIndex) => (
                          <div key={service.name}>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">{service.name}</span>
                              <span className="text-primary font-semibold">${service.price}</span>
                            </div>
                            {serviceIndex < category.services.length - 1 && (
                              <Separator className="mt-2" />
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <Button
                        className="w-full"
                        data-testid={`button-book-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        Book {category.title.includes('&') ? 'Service' : category.title}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple steps to transform your space with plants</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`process-step-${step.step}`}
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
