"use client";

import { motion } from "framer-motion";
import { BarChart3, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const contactLinks = [
  { label: "Email", href: "mailto:javaidbutt009@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-javaid-butt/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Javaid23", icon: Github },
  { label: "Kaggle", href: "https://www.kaggle.com/jedi009", icon: BarChart3 }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} (${data.email})`);
    window.location.href = `mailto:javaidbutt009@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("javaidbutt009@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="section-wrap"
    >
      <div className="mx-auto max-w-2xl">
        <h3 className="text-center text-3xl font-bold text-white">Contact</h3>
        <p className="mt-4 text-center text-slate-400">
          Let&apos;s build reliable, high-impact AI systems that are ready for production.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="card-surface inline-flex items-center justify-center gap-2 px-4 py-3 text-slate-200 transition hover:border-cyber hover:text-cyber"
              >
                <Icon size={16} />
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="relative mt-4 flex justify-center">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-cyber hover:text-cyber"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy Email"}
          </button>
          {copied ? (
            <span className="absolute -top-8 rounded bg-emerald/20 px-2 py-1 text-xs text-emerald">Copied!</span>
          ) : null}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card-surface mt-8 space-y-4 p-6">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-slate-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none ring-cyber/40 transition focus:ring"
            />
            {errors.name ? <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p> : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email"
                }
              })}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none ring-cyber/40 transition focus:ring"
            />
            {errors.email ? <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p> : null}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message", { required: "Message is required" })}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none ring-cyber/40 transition focus:ring"
            />
            {errors.message ? <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p> : null}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-cyber px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            <Mail size={16} />
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
