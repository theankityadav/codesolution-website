"use client";

import Link from "next/link";
import { ArrowRight, Palette, Monitor, Server, Layers, CheckCircle, Cloud, Link as LinkIcon, Code } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
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

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="We offer comprehensive digital solutions to help your business thrive in the modern world."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-1 mb-4">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
