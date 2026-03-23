"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SkillBadgeProps = {
  label: string;
  icon?: LucideIcon;
};

export default function SkillBadge({ label, icon: Icon }: SkillBadgeProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 }
      }}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-slate-700",
        "bg-slate-900/80 px-4 py-2 text-sm text-slate-200"
      )}
    >
      {Icon ? <Icon size={15} className="text-cyber" /> : null}
      <span>{label}</span>
    </motion.div>
  );
}
