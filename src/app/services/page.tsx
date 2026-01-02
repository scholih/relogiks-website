"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "rag",
    icon: "🧠",
    title: "RAG & Knowledge Systems",
    headline: "Turn your documents into answers",
    problem:
      "Your organization's knowledge is scattered across PDFs, wikis, SharePoint, emails, and legacy systems. Finding the right information takes hours. New hires struggle to get up to speed. Institutional knowledge walks out the door with every departure.",
    solution:
      "We build custom RAG (Retrieval-Augmented Generation) pipelines that connect to your existing document stores, understand context, and deliver accurate answers in seconds. No more keyword searches. No more endless scrolling. Just answers.",
    useCases: [
      "Legal document search and analysis",
      "Internal policy Q&A for HR and compliance",
      "Technical manual lookup for support teams",
      "Research paper synthesis for R&D",
      "Contract clause extraction and comparison",
    ],
    differentiator: "EU-hosted infrastructure. GDPR-compliant by design. Your documents never leave European jurisdiction.",
  },
  {
    id: "automation",
    icon: "⚡",
    title: "AI Automation",
    headline: "Automate without vendor lock-in",
    problem:
      "Manual processes drain your team's time. SaaS automation tools are expensive and send your data to US servers. You want AI-powered workflows but can't trust black-box solutions with sensitive business data.",
    solution:
      "Self-hosted n8n workflows with AI agents running on your infrastructure—or ours in the EU. Connect any system, automate complex decisions, and maintain full control. Open source foundation, no per-seat pricing.",
    useCases: [
      "Lead enrichment and scoring",
      "Automated report generation",
      "Inbox triage and response drafting",
      "Data pipeline orchestration",
      "Document processing and extraction",
    ],
    differentiator: "Open source. Self-hosted. Your infrastructure, your rules.",
  },
  {
    id: "strategy",
    icon: "🎯",
    title: "AI Strategy & Training",
    headline: "Know what AI can (and can't) do for you",
    problem:
      "The hype is deafening. Every vendor promises transformation. Your team has ideas but no framework to evaluate them. Pilots fail because expectations don't match reality. Budget gets wasted on solutions looking for problems.",
    solution:
      "Vendor-neutral assessment of your AI opportunities. We identify high-impact, feasible use cases—and tell you what won't work. Clear roadmaps. Realistic timelines. Team training that builds lasting capability.",
    useCases: [
      "Executive AI workshops",
      "Use case identification and prioritization",
      "Build vs. buy analysis",
      "Team capability assessments",
      "AI readiness audits",
    ],
    differentiator: "Vendor-neutral. EU-focused. We recommend what works, not what pays us.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We map your current state, pain points, and opportunities. No sales pitch—just understanding.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture and approach tailored to your constraints. Security, compliance, and integration considered from day one.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "Iterative implementation with your team involved. Working software, not slide decks.",
  },
  {
    number: "04",
    title: "Support",
    description: "Handover with documentation and training. Ongoing support as needed. Your system, your control.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 bg-grid">
        <div className="absolute inset-0 gradient-fade-b" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              AI that works for European enterprise
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical solutions. EU infrastructure. No hype, no lock-in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-[var(--bg-secondary)]" : ""}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl">{service.icon}</span>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-xl text-[var(--accent-light)]">{service.headline}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Problem & Solution */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                      The Problem
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {service.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                      Our Solution
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {service.solution}
                    </p>
                  </div>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-primary)] rounded-full border border-[var(--border)]">
                      <span className="text-lg">🇪🇺</span>
                      <span className="text-sm text-[var(--text-secondary)]">
                        {service.differentiator}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] p-6 lg:p-8">
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
                    Use Cases
                  </h3>
                  <ul className="space-y-3">
                    {service.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[var(--accent-light)] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-[var(--text-secondary)]">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Process Section */}
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
              How we work
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A straightforward process focused on understanding your needs and delivering results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-[var(--border)] mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)]">{step.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to talk?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
              No sales pitch. Let&apos;s discuss your challenges and see if we can help.
              30 minutes, no commitment.
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
                Send an email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
