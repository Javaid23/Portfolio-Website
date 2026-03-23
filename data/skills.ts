export type SkillCategory = {
  title: string;
  skills: Array<{
    label: string;
    icon?: string;
  }>;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / ML",
    skills: [
      { label: "PyTorch", icon: "brain" },
      { label: "LangChain", icon: "blocks" },
      { label: "LlamaIndex", icon: "database" },
      { label: "OpenAI API", icon: "sparkles" },
      { label: "RAG", icon: "search" },
      { label: "Vector DBs", icon: "layers" },
      { label: "HuggingFace", icon: "bot" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { label: "Python", icon: "code" },
      { label: "FastAPI", icon: "server" },
      { label: "Node.js", icon: "network" },
      { label: "PostgreSQL", icon: "cylinder" },
      { label: "Redis", icon: "cpu" },
      { label: "Docker", icon: "container" },
      { label: "REST APIs", icon: "waypoints" }
    ]
  },
  {
    title: "Data Science",
    skills: [
      { label: "Pandas", icon: "database" },
      { label: "NumPy", icon: "layers" },
      { label: "Matplotlib", icon: "palette" },
      { label: "Seaborn", icon: "palette" },
      { label: "Scikit-learn", icon: "brain" },
      { label: "Streamlit", icon: "component" }
    ]
  }
];
