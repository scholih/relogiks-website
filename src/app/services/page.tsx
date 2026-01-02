"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "rag",
    icon: "🧠",
    title: "RAG & Knowledge Systems",
    headline: "Connect your documents to LLMs",
    stack: "LangChain (90k+ GitHub stars, Sequoia-backed), pgvector or Qdrant for embeddings, your choice of LLM. Same components Notion, Replit, and Fortune 500 companies run in production.",
    integration: "Already running OpenSearch or Elasticsearch? We bolt vector search and RAG capabilities on top. Existing Lucene indexes stay in place. Same for your document stores, SharePoint, or cloud storage. No rip-and-replace. Extend what works.",
    containment: "We build RAG systems that run entirely within your infrastructure. No external API calls. No data leaving your network. Local LLMs like Llama or Mistral, local embeddings, local vector store. For sensitive environments, this isn't a feature — it's a requirement.",
    avoid: "Microsoft Copilot doesn't let you see how it retrieves. OpenAI's assistants API locks your data in their infrastructure. With this stack, you control the retrieval logic, the embedding model, and where your documents live.",
    benefit: "Runs in EU infrastructure, entirely on-premise, or hybrid. Your data, your rules.",
  },
  {
    id: "automation",
    icon: "⚡",
    title: "AI Automation",
    headline: "Workflow automation with AI agents",
    stack: "n8n (40k+ GitHub stars, profitable company, used by NASA and Sennheiser), connected to any LLM. Your workflows, your infrastructure, your data.",
    what: "n8n is workflow automation — think Zapier, but self-hosted and extensible. Add LLM nodes and you get AI agents that can read emails, extract data, make decisions, and take action.",
    avoid: "Zapier charges per task. Make.com stores your credentials on US servers. With n8n, you pay once for hosting. No per-execution fees. No third-party access to your API keys.",
    benefit: "Self-hosted means self-controlled. Runs where you want it.",
  },
  {
    id: "strategy",
    icon: "🎯",
    title: "AI Strategy & Training",
    headline: "Which use cases have ROI. Which don't.",
    what: "Assessment of where AI fits in your organization. What your team needs to learn. What you should build vs. buy.",
    approach: "No vendor partnerships. No referral fees. We recommend what works, even if that's a Microsoft product. Usually it isn't — but we'll tell you when it is.",
    avoid: "Consultants who recommend whatever they're certified to sell. Hype cycles disguised as strategy. Pilots that go nowhere.",
    benefit: "Decisions based on your constraints, not our partnerships.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We map what you have. Existing infrastructure, data sources, security constraints, team capabilities. No pre-packaged solutions.",
  },
  {
    number: "02",
    title: "Scope",
    description: "Clear scope. Fixed price where possible. We tell you what's realistic and what isn't — even if that means less work for us.",
  },
  {
    number: "03",
    title: "Build",
    description: "We work fast. Projects that traditionally required large teams and long timelines now take a fraction of that. Working software, not slide decks.",
  },
  {
    number: "04",
    title: "Handover",
    description: "You own the result. Full documentation. Source code. Infrastructure access. No lock-in to us either.",
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
            <p className="text-[var(--accent-light)] mb-4 text-sm uppercase tracking-wider">
              What we build
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              State-of-the-art components.
              <br />
              <span className="text-[var(--text-secondary)]">Your infrastructure. Full ownership.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* RAG Section */}
      <section id="rag" className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-8">
              <span className="text-5xl">{services[0].icon}</span>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
                  {services[0].title}
                </h2>
                <p className="text-xl text-[var(--accent-light)]">{services[0].headline}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    The stack
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[0].stack}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    Integrates with what you have
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[0].integration}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    Full containment option
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[0].containment}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)]">
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    What you avoid
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[0].avoid}</p>
                </div>
                <div className="p-6 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)]">
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    Practical benefit
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[0].benefit}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-8">
              <span className="text-5xl">{services[1].icon}</span>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
                  {services[1].title}
                </h2>
                <p className="text-xl text-[var(--accent-light)]">{services[1].headline}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    What it is
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[1].what}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    The stack
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[1].stack}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    What you avoid
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[1].avoid}</p>
                </div>
                <div className="p-6 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    Practical benefit
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[1].benefit}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-8">
              <span className="text-5xl">{services[2].icon}</span>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
                  {services[2].title}
                </h2>
                <p className="text-xl text-[var(--accent-light)]">{services[2].headline}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    What it is
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[2].what}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    The approach
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[2].approach}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)]">
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    What you avoid
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[2].avoid}</p>
                </div>
                <div className="p-6 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)]">
                  <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                    Practical benefit
                  </h3>
                  <p className="text-[var(--text-secondary)]">{services[2].benefit}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
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

      {/* What we don't do */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              What we don't do
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Multi-month discovery phases",
                "Hourly billing that rewards slowness",
                "Solutions that require us to operate them",
                "Vendor partnerships that bias our recommendations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border)]"
                >
                  <span className="text-[var(--accent)]">✕</span>
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
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
              We'll tell you what's realistic and what isn't.
              No sales pitch — just an honest assessment.
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
