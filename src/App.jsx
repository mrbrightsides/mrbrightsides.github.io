import { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, ArrowRight, Calendar, Code2, Link as LinkIcon } from "lucide-react";

import Projects from "./components/Projects";
import Activity from "./components/Activity";

const links = [
  { href: "https://elpeef.com", label: "elpeef.com" },
  { href: "https://khudri.elpeef.com", label: "khudri.elpeef.com" },
  { href: "https://s.id/khudri", label: "s.id/khudri (Link Hub)" },
  { href: "https://github.com/mrbrightsides", label: "GitHub @mrbrightsides" },
];

export default function Portfolio() {
  useEffect(() => {
    document.title = "Akhmad Khudri | Web3 • Smart Contracts";
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-200">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0b0f19]/70 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-white">AKHMAD KHUDRI</a>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#activity" className="hover:text-white">Activity</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-4 pt-24 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-white"
        >
          Building Web3 tools & smart contract products.
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300 text-justify">
          Dosen & peneliti yang suka build, compile, deploy, dan ship produk: STC plugin serta seluruh ekosistemnya, SmartFaith FNA Islamichat, dan Web3 Rantai. Fokus pada Solidity, React, dan pengalaman
          pembelajaran yang bermanfaat untuk komunitas.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white text-black hover:opacity-90"
          >
            Explore Projects <ArrowRight size={16} />
          </a>
          <a
            href="#activity"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-transparent border border-white/20 hover:border-white/40"
          >
            Live Activity <Calendar size={16} />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
        <p className="mt-3 text-gray-300 text-justify leading-relaxed">
          Saya membangun aplikasi terapan Web3 dan AI: kontrak pintar (Solidity), integrasi dApp (React), serta edukasi
          berbasis riset. Saat ini mengerjakan ekosistem <span className="text-white">STC</span> untuk mint/generate token & reservasi,
          dan berbagai <span className="text-white">Aplikasi</span> yang berkaitan dengan:
        </p>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-300">
          {[
            "Solidity / EVM", "React / Vite / Tailwind", "ethers.js / wagmi", "Hardhat / Foundry",
            "Mythril / Slither", "GitHub Actions / CI", "WSL / Docker", "Tech Education"
          ].map((s) => (
            <li key={s} className="rounded-lg border border-white/10 px-3 py-2 bg-white/5">{s}</li>
          ))}
        </ul>
      </section>

      {/* PROJECTS */}
      <Projects />

      {/* ACTIVITY */}
      <Activity githubUser="mrbrightsides" hackatimeUserId="19310" />

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
        <p className="mt-2 text-gray-300 text-sm max-w-2xl">
          Tertarik kolaborasi riset, pelatihan smart contract, atau membahas adopsi Web3? Silakan kirim email.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:khudri@binadarma.ac.id" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white text-black hover:opacity-90">
            <Mail size={16}/> Email
          </a>
          <a href="https://github.com/mrbrightsides" target="_blank" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-transparent border border-white/20 hover:border-white/40">
            <Github size={16}/> GitHub
          </a>
        </div>
      </section>

      <footer className="px-4 pb-12 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Akhmad Khudri — Built with React & Tailwind. Deployed on GitHub Pages.
      </footer>
    </div>
  );
}
