export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Tour Guide Web Portal",
    description:
      "A complete travel planning and destination discovery portal with a clean user experience for exploring guides, routes, and key trip information.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Javaid23/Tour-Guide-Web-Portal",
    demo: "https://tour-guide-web-portal.vercel.app/"
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Binary classification project to detect fraudulent vs non-fraudulent credit card transactions using a Kaggle dataset with focused preprocessing, class imbalance handling, and model evaluation.",
    stack: ["Python", "Pandas", "Scikit-learn", "Kaggle Dataset"],
    github: "https://github.com/Javaid23"
  },
  {
    title: "HBL Policy Bot",
    description:
      "Complete RAG-based chatbot built with LangChain to answer staff queries related to HBL's Code of Ethics & Business Conduct with grounded policy responses.",
    stack: ["LangChain", "RAG", "OpenAI", "Next.js"],
    github: "https://github.com/javaidb/hbl-policy-bot"
  },
  {
    title: "Safe City Project",
    description:
      "Computer vision system using YOLOv8 to detect vehicles, classify car brands, and read number plates for challan automation and public safety monitoring.",
    stack: ["YOLOv8", "OpenCV", "Python", "OCR"],
    github: "https://github.com/Javaid23"
  },
  {
    title: "Open Record",
    description:
      "Platform that fetches documents from the US Federal Register, summarizes each document, surfaces related similar orders, and includes a chatbot for interactive question answering on the retrieved content.",
    stack: ["Python", "FastAPI", "RAG", "LLM Chatbot"],
    github: "https://github.com/Javaid23"
  },
  {
    title: "DevPortal",
    description:
      "Developer API dashboard with usage analytics, key management, and deployment pipelines.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/javaidb/devportal"
  }
];
