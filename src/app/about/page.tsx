"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    icon: "🎯",
    title: "Pragmatic",
    description: "We recommend what works, not what's trendy. If AI isn't the answer, we'll tell you.",
  },
  {
    icon: "🔓",
    title: "Independent",
    description: "No vendor partnerships, no referral fees. Our advice serves your interests only.",
  },
  {
    icon: "🇪🇺",
    title: "EU-First",
    description: "European infrastructure, European jurisdiction, European values. By choice, not compromise.",
  },
];

const euCommitments = [
  {
    icon: "🏛️",
    title: "Data Sovereignty",
    description: "Your data stays in the European Union. No transfers to third countries. No exceptions.",
  },
  {
    icon: "🔒",
    title: "GDPR by Design",
    description: "Privacy isn't a checkbox. Every system we build has data protection architected in from day one.",
  },
  {
    icon: "⚖️",
    title: "No CLOUD Act Exposure",
    description: "We use European providers only. No US-headquartered companies with foreign government access obligations.",
  },
  {
    icon: "🌱",
    title: "Carbon Neutral",
    description: "Our infrastructure runs on renewable energy. Sustainability is part of our European commitment.",
  },
];

const credentials = [
  { label: "Legal Entity", value: "Backoffice Scholing B.V." },
  { label: "Trade Name", value: "Relogiks" },
  { label: "Location", value: "Netherlands, EU" },
  { label: "KvK", value: "Available on request" },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 bg-grid">
        <div className="absolute inset-0 gradient-fade-b" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              AI consultancy for European enterprise.
              <br />
              <span className="text-[var(--text-secondary)]">Independent. Pragmatic. EU-first.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)]">
              We help European organizations implement AI that actually works—without
              the hype, without the lock-in, and without your data leaving the EU.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                Why we exist
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  Enterprise AI has a problem. The market is flooded with hype,
                  vendors promising transformation, and solutions that require
                  sending your most sensitive data to US cloud providers.
                </p>
                <p>
                  European organizations deserve better. They need practical guidance
                  from people who understand both the technology and the regulatory
                  landscape. They need solutions that respect data sovereignty and
                  don't create vendor dependency.
                </p>
                <p>
                  That's why Relogiks exists. We bridge the gap between AI potential
                  and European reality—delivering implementations that work within
                  your constraints, not despite them.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4 p-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)]"
                >
                  <span className="text-2xl">{value.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EU Commitment Section */}
      <section id="eu-commitment" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🇪🇺</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                Our EU Commitment
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              This isn't marketing. It's how we operate. Every component, every
              provider, every decision prioritizes European data sovereignty.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {euCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{commitment.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                      {commitment.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">
              Legal Information
            </h2>
            <div className="bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] overflow-hidden">
              {credentials.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex justify-between items-center p-4 ${
                    index !== credentials.length - 1 ? "border-b border-[var(--border)]" : ""
                  }`}
                >
                  <span className="text-[var(--text-secondary)]">{item.label}</span>
                  <span className="text-[var(--text-primary)] font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              Relogiks is a trade name (handelsnaam) of Backoffice Scholing B.V.,
              registered in the Netherlands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border)] p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
              Let's talk
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
              Whether you have a specific project in mind or just want to explore
              what's possible—we're happy to have a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--text-secondary)] transition-colors"
              >
                Schedule a call
              </Link>
              <a
                href="mailto:info@relogiks.eu"
                className="px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
              >
                info@relogiks.eu
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
