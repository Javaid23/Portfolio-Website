"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
};

export default function ProjectCard({ title, description, stack, github, demo }: ProjectCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="card-surface flex h-full flex-col p-6 hover:shadow-cyber"
    >
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-emerald/50 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-slate-200 transition hover:text-cyber"
        >
          <Github size={16} />
          GitHub
        </a>
        {demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-200 transition hover:text-cyber"
          >
            <ArrowUpRight size={16} />
            Live Demo
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
