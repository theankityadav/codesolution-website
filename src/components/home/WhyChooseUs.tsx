"use client";

import { motion } from "framer-motion";
import { Users, Zap, Shield, Clock, Award, HeadphonesIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team consists of seasoned professionals with years of experience in cutting-edge technologies.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We follow agile methodologies to deliver high-quality solutions on time, every time.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Security is built into everything we do. Your data and applications are always protected.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you whenever needed.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "150+ successful projects delivered with a 98% client satisfaction rate.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Communication",
    description: "Regular updates, transparent processes, and a dedicated project manager for every project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <Container>
        <SectionHeading
          title="Why Choose CodeSolution?"
          subtitle="We're committed to delivering excellence in every project we undertake."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
