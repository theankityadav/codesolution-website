"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Briefcase, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { STATS, TEAM_MEMBERS } from "@/lib/constants";

export default function AboutPage() {
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
              About CodeSolution
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We&apos;re a team of passionate technologists dedicated to building 
              exceptional digital experiences that drive business growth.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, CodeSolution started with a simple mission: to help businesses 
                  leverage technology to achieve their goals. What began as a small team of three 
                  developers has grown into a full-service digital agency with over 25 experts.
                </p>
                <p>
                  We&apos;ve had the privilege of working with startups, SMEs, and enterprise clients 
                  across various industries, delivering solutions that make a real impact. Our 
                  commitment to quality, innovation, and client success has been the cornerstone 
                  of our growth.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing new technologies and 
                  methodologies to deliver cutting-edge solutions that help our clients stay 
                  ahead in an ever-evolving digital landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted technology partner for businesses worldwide, 
                known for delivering innovative solutions that create lasting value 
                and drive digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge technology solutions that 
                solve real problems, enhance efficiency, and unlock new opportunities 
                for growth and success.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every line of code and every pixel we design.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We work closely with our clients, treating their success as our own.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "We embrace new technologies and approaches to deliver cutting-edge solutions.",
              },
              {
                icon: Briefcase,
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical business practices.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <SectionHeading
            title="Meet Our Leadership"
            subtitle="The experienced team driving our vision forward."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
