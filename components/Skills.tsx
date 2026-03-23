"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Bot,
  Brain,
  Code,
  Component,
  Container,
  Cpu,
  Cylinder,
  Database,
  FileCode,
  Layers,
  MoveRight,
  Network,
  Orbit,
  Palette,
  Search,
  Server,
  Sparkles,
  Waypoints,
  type LucideIcon
} from "lucide-react";
import SkillBadge from "./SkillBadge";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  blocks: Blocks,
  bot: Bot,
  brain: Brain,
  code: Code,
  component: Component,
  container: Container,
  cpu: Cpu,
  cylinder: Cylinder,
  database: Database,
  "file-code": FileCode,
  layers: Layers,
  "move-right": MoveRight,
  network: Network,
  orbit: Orbit,
  palette: Palette,
  search: Search,
  server: Server,
  sparkles: Sparkles,
  waypoints: Waypoints
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="section-wrap"
    >
      <h3 className="text-3xl font-bold text-white">Skills</h3>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="card-surface p-6">
            <h4 className="text-lg font-semibold text-cyber">{category.title}</h4>
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
              className="mt-5 flex flex-wrap gap-3"
            >
              {category.skills.map((skill) => (
                <SkillBadge key={skill.label} label={skill.label} icon={skill.icon ? iconMap[skill.icon] : undefined} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
