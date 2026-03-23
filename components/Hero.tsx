"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Github, Linkedin, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative flex min-h-[78vh] items-center overflow-hidden px-6 py-20 md:min-h-[82vh]">
      <div className="pointer-events-none absolute inset-0 dot-grid-bg" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start gap-8 text-left md:flex-row md:items-center"
      >
        <div className="rounded-full p-2 ring-2 ring-cyber/50 shadow-cyber">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border border-slate-700 bg-slate-900 sm:h-52 sm:w-52 lg:h-56 lg:w-56">
            {imageError ? (
              <div className="flex h-full w-full items-center justify-center text-5xl font-bold text-cyber">JB</div>
            ) : (
              <Image
                src="/Javaid photo.png"
                alt="Javaid Butt profile photo"
                fill
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 224px"
                className="object-cover"
                onError={() => setImageError(true)}
                priority
              />
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyber/35 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-cyber">
            <Sparkles size={14} />
            Available for AI/ML roles
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Full Stack AI Engineer</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">Javaid Butt</h1>
          <h2 className="mt-3 max-w-3xl text-lg font-semibold text-cyber sm:text-xl md:text-2xl">
            Building practical AI products with RAG, LLM integrations, and clean web interfaces.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            Bridging the gap between LLM research and production-ready web applications
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-cyber px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-cyber px-6 py-3 text-sm font-semibold text-cyber transition hover:bg-cyber/10"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/Javaid23"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyber hover:text-cyber"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-javaid-butt/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyber hover:text-cyber"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://www.kaggle.com/jedi009"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyber hover:text-cyber"
            >
              <BarChart3 size={16} />
              Kaggle
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="card-surface px-4 py-3 text-sm text-slate-200">1+ Year Experience</div>
            <div className="card-surface px-4 py-3 text-sm text-slate-200">15+ Projects Delivered</div>
            <div className="card-surface px-4 py-3 text-sm text-slate-200">4+ LLM Platforms</div>
          </div>

          <a
            href="https://tour-guide-web-portal.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="card-surface mt-5 inline-flex items-center gap-3 px-4 py-3 text-sm text-slate-200 transition hover:border-cyber"
          >
            <span className="font-semibold text-white">Featured:</span>
            Tour Guide Web Portal
            <ArrowUpRight size={16} className="text-cyber" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
