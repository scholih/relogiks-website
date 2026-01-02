"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "RAG & Knowledge Systems",
    description: "Turn your documents into answers. Custom pipelines that search, retrieve, and respond.",
    href: "/services#rag",
    icon: "🧠",
  },
  {
    title: "AI Automation",
    description: "Self-hosted n8n workflows with AI agents. No vendor lock-in, full control.",
    href: "/services#automation",
    icon: "⚡",
  },
  {
    title: "AI Strategy & Training",
    description: "Vendor-neutral assessments, roadmaps, and team training for enterprise AI adoption.",
    href: "/services#strategy",
    icon: "🎯",
  },
];

const trustBadges = [
  { icon: "🇪🇺", text: "100% EU hosted" },
  { icon: "🔒", text: "GDPR compliant" },
  { icon: "🛡️", text: "No US CLOUD Act" },
  { icon: "🌱", text: "Carbon neutral" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-grid">
        <div className="absolute inset-0 gradient-fade-b" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              European AI for
              <br />
              <span className="text-[var(--text-secondary)]">European Enterprise.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
              Enterprise RAG, AI automation, and knowledge systems.
              100% EU infrastructure. Your data never leaves European jurisdiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--text-secondary)] transition-colors"
              >
                Schedule a call
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
              >
                View services
              </Link>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] rounded-full border border-[var(--border)]"
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="text-sm text-[var(--text-secondary)]">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              What we do
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical AI solutions for European enterprise. No hype, no lock-in.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={service.href}
                  className="block p-6 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors group"
                >
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-light)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-secondary)]">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EU Commitment Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border)] p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🇪🇺</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                Your data never leaves Europe.
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl">
              Every component of our infrastructure is hosted in the European Union.
              No US CLOUD Act exposure. No data transfers outside European jurisdiction.
              Full GDPR compliance by design, not by checkbox.
            </p>
            <Link
              href="/about#eu-commitment"
              className="inline-flex items-center gap-2 text-[var(--text-primary)] font-medium hover:text-[var(--accent-light)] transition-colors"
            >
              Learn more about our EU commitment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
              Weekly AI Digest
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
              Curated news on RAG, AI automation, and European enterprise tech.
              No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--text-secondary)] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
