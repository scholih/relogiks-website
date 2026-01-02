"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const credentials = [
  { label: "Legal entity", value: "Backoffice Scholing B.V." },
  { label: "Trade name", value: "Relogiks" },
  { label: "Location", value: "Netherlands, EU" },
  { label: "KvK", value: "Available on request" },
];

const notList = [
  "A body shop that bills hours",
  "A reseller disguised as a consultant",
  "A startup burning VC money on your pilot",
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
            <p className="text-[var(--accent-light)] mb-4 text-sm uppercase tracking-wider">
              About Relogiks
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              Technical consultancy for enterprise AI.
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)]">
              Based in the Netherlands. Small by design — we do the work ourselves,
              not delegate to junior consultants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Background
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  Years in enterprise IT. We've sat on your side of the table —
                  evaluating vendors, justifying budgets, explaining technical
                  decisions to boards. We know what you're navigating.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Why we exist
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  The AI tooling landscape matured faster than most enterprises realized.
                  The best components are now open source. The integration complexity
                  that held back best-of-breed approaches is gone.
                </p>
                <p>
                  Most organizations haven't caught up to this shift yet. We help them get there.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we work with you */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              How we work with you
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-3">
                  Direct engagement
                </h3>
                <p className="text-[var(--text-secondary)]">
                  For enterprise clients who need AI implementation expertise.
                  Assessment, architecture, build, handover.
                </p>
              </div>
              <div className="p-6 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--text-primary)] mb-3">
                  Partnership
                </h3>
                <p className="text-[var(--text-secondary)]">
                  We work with consultancies, system integrators, and software vendors
                  who need AI implementation expertise for their existing customer projects.
                  You have the relationship. We have the capability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our position */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Our position
            </h2>
            <div className="max-w-3xl space-y-4 text-[var(--text-secondary)]">
              <p>
                No vendor partnerships that bias recommendations. No certifications to protect.
                Our advice is based on what works. Sometimes that's our stack. Sometimes it isn't.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
                What we're not
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {notList.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border)]"
                  >
                    <span className="text-[var(--accent)]">✕</span>
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              Legal
            </h2>
            <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] overflow-hidden max-w-lg">
              {credentials.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex justify-between items-center p-4 ${
                    index !== credentials.length - 1 ? "border-b border-[var(--border)]" : ""
                  }`}
                >
                  <span className="text-[var(--text-secondary)]">{item.label}</span>
                  <span className="text-[var(--text-primary)]">{item.value}</span>
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

      {/* Practical benefit */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[var(--text-secondary)]">
              All infrastructure runs in the EU. No GDPR paperwork. No data transfer agreements.
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
              Have a project in mind?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
              Whether you're an enterprise client or a partner looking for AI expertise —
              let's have a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--text-secondary)] transition-colors"
              >
                Get in touch
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
