"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

type Sender = "user" | "assistant";

type ChatMessage = {
  id: number;
  sender: Sender;
  text: string;
};

const quickPrompts = [
  "What services do you offer?",
  "Show me your top project",
  "What is your AI stack?",
  "How can we work together?"
];

function buildReply(input: string): string {
  const text = input.toLowerCase();
  const topProject = projects[0];
  const projectTitles = projects.map((project) => project.title).join(", ");
  const aiStack =
    skillCategories.find((category) => category.title === "AI / ML")?.skills.map((skill) => skill.label).join(", ") ||
    "DeepSeek, Mistral, Ollama, Perplexity";
  const dataScienceStack =
    skillCategories
      .find((category) => category.title === "Data Science")
      ?.skills.map((skill) => skill.label)
      .join(", ") || "Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Streamlit";

  if (text.includes("service") || text.includes("offer")) {
    return "I provide RAG system development, LLM integration, data science solutions, and AI workflow automation. You can check the Services section for details.";
  }

  if (text.includes("all project") || text.includes("portfolio project")) {
    return `Featured projects include: ${projectTitles}.`;
  }

  if (text.includes("project") || text.includes("top")) {
    if (topProject) {
      return `A major project is ${topProject.title}. Demo: ${topProject.demo ?? "not published yet"}. GitHub: ${topProject.github}.`;
    }

    return "Projects are available in the Projects section of this portfolio.";
  }

  if (text.includes("stack") || text.includes("tech") || text.includes("llm")) {
    return `AI/ML stack: ${aiStack}. Data Science stack: ${dataScienceStack}.`;
  }

  if (text.includes("work") || text.includes("hire") || text.includes("contact")) {
    return "You can contact me via the Contact section. Email: javaidbutt009@gmail.com, LinkedIn: https://www.linkedin.com/in/muhammad-javaid-butt/, Kaggle: https://www.kaggle.com/jedi009.";
  }

  return "Thanks for your message. Ask me about services, projects, AI stack, or collaboration and I will share quick details.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "assistant",
      text: "Hi, I am Javaid's portfolio assistant. Ask me about projects, services, or AI experience."
    }
  ]);

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  const sendMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = { id: nextId, sender: "user", text: trimmed };
    const assistantMessage: ChatMessage = { id: nextId + 1, sender: "assistant", text: buildReply(trimmed) };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/95 shadow-cyber backdrop-blur-md sm:w-[22rem]"
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                <Bot size={16} className="text-cyber" />
                Portfolio Assistant
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Close chatbot"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-[42vh] space-y-3 overflow-y-auto px-4 py-3 sm:max-h-72">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.sender === "assistant"
                      ? "max-w-[90%] rounded-xl bg-slate-900 px-3 py-2 text-sm text-slate-200"
                      : "ml-auto max-w-[90%] rounded-xl bg-cyber px-3 py-2 text-sm font-medium text-slate-950"
                  }
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="border-t border-slate-800 px-4 py-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-cyber hover:text-cyber"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none ring-cyber/40 transition focus:ring"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-cyber p-2 text-slate-950 transition hover:brightness-110"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyber px-4 py-3 text-sm font-semibold text-slate-950 shadow-cyber transition hover:brightness-110 sm:w-auto"
      >
        <MessageCircle size={18} />
        {open ? "Close" : "Chat with me"}
      </button>
    </div>
  );
}
