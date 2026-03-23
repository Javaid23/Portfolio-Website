"use client";

import { motion } from "framer-motion";

const stats = [
  "1+ Year Experience",
  "15+ Projects Delivered",
  "4+ LLM Platforms"
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="section-wrap"
    >
      <h3 className="text-3xl font-bold text-white">About</h3>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-5 text-slate-300">
          <p>
            I build production-grade AI products that combine robust retrieval systems with intuitive user experiences.
            My work spans end-to-end architecture from data ingestion and embedding pipelines to deployment-ready web
            interfaces.
          </p>
          <p>
            I specialize in RAG pipelines, practical LLM integration across DeepSeek, Mistral, Ollama, and
            Perplexity, and scalable full-stack delivery using Next.js and FastAPI.
          </p>
          <p>
            Over the last 1 year, I have delivered AI-driven platforms for fintech, operations, and enterprise
            knowledge workflows where reliability, observability, and latency matter.
          </p>
        </div>

        <div className="grid gap-4">
          {stats.map((stat) => (
            <div key={stat} className="card-surface p-6 text-lg font-semibold text-white">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
