"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const educationItems = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Government College University, Lahore",
    icon: GraduationCap,
    note: "Focused on core computer science foundations, problem solving, and software development."
  },
  {
    title: "Aspire Leadership Programme",
    institution: "Harvard Business School",
    icon: Award,
    note: "Leadership, communication, and decision-making training for high-impact professional growth."
  }
];

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="section-wrap"
    >
      <h3 className="text-3xl font-bold text-white">Education</h3>
      <p className="mt-3 max-w-2xl text-slate-400">
        Academic and leadership credentials that support my technical work in AI and software projects.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {educationItems.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="card-surface p-6">
              <div className="inline-flex rounded-lg border border-slate-700 bg-slate-900 p-2 text-cyber">
                <Icon size={20} />
              </div>
              <h4 className="mt-4 text-xl font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm font-medium text-emerald">{item.institution}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.note}</p>
            </article>
          );
        })}
      </div>
    </motion.section>
  );
}
