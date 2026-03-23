import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Javaid Butt | Full Stack AI Engineer",
  description:
    "Portfolio of Javaid Butt, a Full Stack AI Engineer building production-ready RAG and LLM web applications.",
  openGraph: {
    title: "Javaid Butt | Full Stack AI Engineer",
    description:
      "Bridging the gap between LLM research and production-ready web applications.",
    type: "website",
    url: "https://javaidb.dev"
  },
  twitter: {
    card: "summary_large_image",
    title: "Javaid Butt | Full Stack AI Engineer",
    description:
      "Explore projects in RAG pipelines, LLM integrations, and full-stack AI product delivery."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-950 font-sans text-white">{children}</body>
    </html>
  );
}
