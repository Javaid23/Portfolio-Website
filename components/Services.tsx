"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Database, LayoutDashboard, Workflow } from "lucide-react";

const services = [
  {
    title: "RAG System Development",
    description:
      "Design and implementation of retrieval-augmented generation pipelines with document chunking, embeddings, and citation-aware responses.",
    icon: Database,
    points: ["Semantic retrieval", "Vector database setup", "Answer grounding"]
  },
  {
    title: "LLM Integration",
    description:
      "Integration of DeepSeek, Mistral, Ollama, and Perplexity APIs into practical workflows for chat, summarization, and automation.",
    icon: BrainCircuit,
    points: ["Prompt workflows", "Model routing", "API orchestration"]
  },
  {
    title: "Data Science Solutions",
    description:
      "End-to-end data analysis and ML prototypes using pandas, NumPy, scikit-learn, and Streamlit for actionable insights.",
    icon: LayoutDashboard,
    points: ["EDA and preprocessing", "Model experiments", "Interactive dashboards"]
  },
  {
    title: "AI Workflow Automation",
    description:
      "Automate repetitive business and analysis tasks with robust Python pipelines and lightweight service integrations.",
    icon: Workflow,
    points: ["Pipeline scripting", "Task automation", "Deployment-ready flows"]
  }
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="section-wrap"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyber">What I Offer</p>
          <h3 className="mt-2 text-3xl font-bold text-white">Services</h3>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-cyber hover:text-cyber"
        >
          Let&apos;s Work Together
          <ArrowRight size={16} />
        </a>
      </div>

      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="card-surface p-6"
            >
              <div className="inline-flex rounded-lg border border-slate-700 bg-slate-900 p-2 text-cyber">
                <Icon size={20} />
              </div>
              <h4 className="mt-4 text-xl font-semibold text-white">{service.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {service.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
