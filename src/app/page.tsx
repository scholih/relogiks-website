"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "RAG & Knowledge Systems",
    description: "Connect your documents to LLMs. Questions in, answers out. Runs on your infrastructure or ours.",
    href: "/services#rag",
    icon: "🧠",
  },
  {
    title: "AI Automation",
    description: "Self-hosted n8n workflows with AI agents. No per-task fees. No third-party access to your data.",
    href: "/services#automation",
    icon: "⚡",
  },
  {
    title: "AI Strategy & Training",
    description: "Which use cases have ROI. Which don't. What to build, what to buy. No vendor bias.",
    href: "/services#strategy",
    icon: "🎯",
  },
];

const proofPoints = [
  { text: "LangChain: 90k+ GitHub stars, Sequoia-backed" },
  { text: "n8n: Used by NASA, Sennheiser, profitable company" },
  { text: "Same stack as Notion, Replit, Fortune 500s" },
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
            <p className="text-[var(--accent-light)] mb-4 text-sm uppercase tracking-wider">
              Open source AI. Enterprise grade.
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              Enterprise AI that works.
              <br />
              <span className="text-[var(--text-secondary)]">Built on components that outperform the alternatives.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
              The best AI tools are no longer locked inside Microsoft or Google.
              LangChain, n8n, pgvector — these open-source components match or exceed
              proprietary alternatives. We integrate them for enterprise use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--text-secondary)] transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
              >
                View services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="py-12 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {proofPoints.map((point) => (
              <div
                key={point.text}
                className="text-sm text-[var(--text-secondary)]"
              >
                {point.text}
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
              What we build
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              State-of-the-art components. Your infrastructure. Full ownership.
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
                  className="block p-6 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors group h-full"
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

      {/* Why This Stack Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
                The integration problem is solved.
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  The old objection to best-of-breed: stitching components together
                  took armies of engineers and months of work.
                </p>
                <p>
                  That objection is gone. Modern development approaches have compressed
                  what used to take teams of 8 engineers two sprints into days of work.
                </p>
                <p>
                  What you get: state-of-the-art AI capabilities, no vendor lock-in,
                  full ownership of your stack.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)]">
                <h4 className="font-medium text-[var(--text-primary)] mb-1">What you avoid</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Pricing surprises. Forced upgrades. Dependency on roadmaps you don't control.
                </p>
              </div>
              <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)]">
                <h4 className="font-medium text-[var(--text-primary)] mb-1">What you keep</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Source code. Infrastructure access. The ability to walk away or switch vendors.
                </p>
              </div>
              <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)]">
                <h4 className="font-medium text-[var(--text-primary)] mb-1">Practical benefit</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Runs in EU infrastructure. No GDPR paperwork. No data transfer agreements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
              You've seen the hype. Here's what actually works.
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
              No sales pitch. We'll assess your situation, tell you what's realistic,
              and be honest about what doesn't make sense.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--text-secondary)] transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
