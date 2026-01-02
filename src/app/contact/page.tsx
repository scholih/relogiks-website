"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const topics = [
  { value: "rag", label: "RAG & Knowledge Systems" },
  { value: "automation", label: "AI Automation" },
  { value: "strategy", label: "AI Strategy & Training" },
  { value: "other", label: "Other / General inquiry" },
];

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "info@relogiks.eu",
    href: "mailto:info@relogiks.eu",
    description: "We respond within 24 hours on business days",
  },
  {
    icon: "📅",
    title: "Schedule a call",
    value: "30-minute intro call",
    href: "#", // Calendly link to be added
    description: "No sales pitch, just a conversation",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, create a mailto link with form data
    const subject = `Contact from ${formState.name} - ${topics.find(t => t.value === formState.topic)?.label || 'General'}`;
    const body = `Name: ${formState.name}
Email: ${formState.email}
Company: ${formState.company || 'Not provided'}
Topic: ${topics.find(t => t.value === formState.topic)?.label || 'Not selected'}

Message:
${formState.message}

Newsletter opt-in: ${formState.newsletter ? 'Yes' : 'No'}`;

    window.location.href = `mailto:info@relogiks.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Have a project in mind? Want to explore what's possible?
              We're happy to have a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start gap-4 p-6 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                <span className="text-3xl">{method.icon}</span>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    {method.title}
                  </h3>
                  <p className="text-[var(--accent-light)] mb-1">{method.value}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{method.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              Send us a message
            </h2>

            {isSubmitted ? (
              <div className="p-8 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] text-center">
                <span className="text-4xl mb-4 block">✓</span>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  Thanks for reaching out!
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Your email client should have opened with your message.
                  We'll get back to you within 24 hours on business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                    >
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)]"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)]"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  {/* Topic */}
                  <div>
                    <label
                      htmlFor="topic"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                    >
                      Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formState.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                    >
                      <option value="">Select a topic</option>
                      {topics.map((topic) => (
                        <option key={topic.value} value={topic.value}>
                          {topic.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                {/* Newsletter opt-in */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formState.newsletter}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded focus:ring-[var(--accent)]"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-[var(--text-secondary)]"
                  >
                    Subscribe to our weekly AI digest. Curated news on RAG, automation,
                    and European enterprise tech. Unsubscribe anytime.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--text-secondary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>

                <p className="text-sm text-[var(--text-secondary)] text-center">
                  We respond within 24 hours on business days.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* EU Note */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="text-2xl">🇪🇺</span>
            <p className="text-[var(--text-secondary)]">
              Your message stays in the EU. We use European infrastructure only.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
