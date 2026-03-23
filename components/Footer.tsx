import { BarChart3, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <p className="text-sm text-slate-400">© 2026 Javaid Butt</p>
        <div className="flex items-center gap-4 text-slate-300">
          <a href="https://github.com/Javaid23" target="_blank" rel="noreferrer" className="hover:text-cyber">
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-javaid-butt/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyber"
          >
            <Linkedin size={18} />
          </a>
          <a href="https://www.kaggle.com/jedi009" target="_blank" rel="noreferrer" className="hover:text-cyber">
            <BarChart3 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
