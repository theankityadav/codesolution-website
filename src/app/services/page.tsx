"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Monitor, Server, Layers, CheckCircle, Cloud, Link as LinkIcon, Code } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Monitor,
  Server,
  Layers,
  CheckCircle,
  Cloud,
  Link: LinkIcon,
  Code,
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Comprehensive digital solutions tailored to your business needs. 
              From design to deployment, we&apos;ve got you covered.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Code;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button>
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>

                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-3 opacity-10" />
                      <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
                        <div className="grid grid-cols-2 gap-4">
                          {service.features.slice(0, 4).map((feature, i) => (
                            <div
                              key={feature}
                              className="bg-white rounded-xl p-4 shadow-sm"
                            >
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                                <span className="text-blue-600 font-bold">
                                  {i + 1}
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 font-medium">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 to-purple-700">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let&apos;s discuss your project requirements. Our experts will help you 
              identify the best solutions for your business goals.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
