"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { TECHNOLOGIES } from "@/lib/constants";

const categoryLabels: Record<string, { title: string; description: string }> = {
  frontend: {
    title: "Frontend Technologies",
    description: "Modern frameworks and libraries for building responsive, interactive user interfaces.",
  },
  backend: {
    title: "Backend Technologies",
    description: "Robust server-side technologies for building scalable APIs and business logic.",
  },
  database: {
    title: "Databases",
    description: "Reliable data storage solutions for every use case, from SQL to NoSQL.",
  },
  cloud: {
    title: "Cloud & DevOps",
    description: "Cloud platforms and tools for deployment, scaling, and infrastructure management.",
  },
  tools: {
    title: "Tools & Collaboration",
    description: "Essential tools for development workflow, version control, and team collaboration.",
  },
};

export default function TechnologiesPage() {
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
              Our Technology Stack
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We use cutting-edge technologies to build robust, scalable, and 
              maintainable solutions for our clients.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="space-y-20">
            {Object.entries(TECHNOLOGIES).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {categoryLabels[category]?.title || category}
                  </h2>
                  <p className="text-gray-600">
                    {categoryLabels[category]?.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {techs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <span className="text-2xl font-bold text-blue-600">
                          {tech.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {tech.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Our Tech Stack Matters
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We carefully select technologies based on your project requirements, 
                  ensuring optimal performance, scalability, and maintainability.
                </p>
                <p>
                  Our team stays up-to-date with the latest advancements, continuously 
                  learning and adopting new tools that can benefit our clients.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Performance-optimized solutions",
                  "Scalable architecture",
                  "Future-proof technology choices",
                  "Industry best practices",
                  "Continuous learning & improvement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Technology Selection Process
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Requirement Analysis", desc: "Understanding your project needs and constraints" },
                  { step: "2", title: "Technology Evaluation", desc: "Assessing options based on performance, scalability, and cost" },
                  { step: "3", title: "Architecture Design", desc: "Creating a robust, scalable system architecture" },
                  { step: "4", title: "Implementation", desc: "Building with best practices and clean code" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Have a Technology Question?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Our experts are here to help you choose the right technology stack 
              for your project. Get in touch for a free consultation.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Talk to Our Experts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
