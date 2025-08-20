export const projects = [
  {
    title: "STC Plugin – Smart Token & Reservation",
    period: "2025",
    description:
      "Plugin untuk ekosistem STC: mint/generate token, reservasi, dan integrasi dApp. Fokus ke praktik Solidity yang aman + DX yang enak.",
    links: {
      demo: "https://stc.elpeef.com",     // ganti kalau ada
      repo: "https://github.com/ELPEEF/stc-plugins", // contoh
    },
    stack: ["Solidity", "React", "Vite", "ethers.js", "Hardhat", "Tailwind"],
    highlights: [
      "Fitur mint/generate token (ERC-20/721) + reservasi",
      "Integrasi wallet, network gating, dan notifikasi UX",
      "Foundry/Hardhat test + slither scan (work in progress)"
    ],
  },
  {
    title: "Islamichat – Smart Faith Assistant",
    period: "2025",
    description:
      "Asisten percakapan yang mengutamakan adab & etika. Rencana integrasi on-chain untuk jejak donasi & wakaf.",
    links: {
      demo: "https://islamichat.elpeef.com", // ganti
      repo: "https://github.com/mrbrightsides/islamichat", // ganti
    },
    stack: ["Next.js / React", "Tailwind", "LangChain", "EVM (planned)"],
    highlights: [
      "Prompting beretika + filter konten sensitif",
      "Roadmap: verifiable donation via smart contract",
    ],
  },
  {
    title: "Web Rantai – React dApp Boilerplate",
    period: "2025",
    description:
      "Boilerplate dApp untuk integrasi wallet, jaringan, dan komponen UI siap pakai. Cocok buat prototyping cepat.",
    links: {
      demo: "https://web-rantai.elpeef.com", // ganti
      repo: "https://github.com/mrbrightsides/web-rantai", // ganti
    },
    stack: ["React", "Vite", "wagmi/ethers", "Tailwind", "Framer Motion"],
    highlights: [
      "Komponen Connect Wallet + Network switch",
      "Template page: Dashboard, Transactions, Settings"
    ],
  },
];
