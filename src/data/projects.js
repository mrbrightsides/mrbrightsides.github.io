export const projects = [
  {
    title: "STC Plugin dan seluruh ekosistemnya",
    period: "2025",
    description:
      "Plugin untuk ekosistem STC: mint/generate token, reservasi, dan integrasi dApp. Fokus ke praktik Solidity yang aman + DX yang nyaman. Di tambah dengan turunannya seperti STC GasVision, STC Analytics, STC Converter, dll.",
    links: {
      demo: "https://smartourism.elpeef.com",
      repo: "https://github.com/ELPEEF/smarttourismchain",
    },
    stack: ["Solidity", "React", "Vite", "ethers.js", "Hardhat", "Wagmi"],
    highlights: [
      "Fitur mint/generate token (ERC-20/721) + reservasi",
      "Integrasi wallet, network gating, dan notifikasi UX",
      "Foundry/Hardhat test + slither scan (work in progress)"
    ],
  },
  {
    title: "SmartFaith FNA Islamichat – Smart Faith Assistant",
    period: "2025",
    description:
      "Asisten percakapan yang mengutamakan adab & etika. Rencana integrasi on-chain untuk jejak donasi & wakaf.",
    links: {
      demo: "https://islamichat.streamlit.app/",
      repo: "https://github.com/mrbrightsides/IslamiChat",
    },
    stack: ["Next.js / React", "Tailwind", "LangChain", "EVM (planned)"],
    highlights: [
      "Prompting beretika + filter konten sensitif",
      "Roadmap: verifiable donation via smart contract",
    ],
  },
  {
    title: "Web RANTAI – React dApp Boilerplate",
    period: "2025",
    description:
      "Boilerplate dApp untuk integrasi wallet, jaringan, dan komponen UI siap pakai. Sudah mampu SIWE.",
    links: {
      demo: "https://rantai.elpeef.com",
      repo: Tidak push ke GH
    },
    stack: ["React", "Vite", "wagmi/ethers", "Tailwind", "Framer Motion"],
    highlights: [
      "Komponen Connect Wallet + Network switch",
      "Plan: Dashboard, Transactions, Settings"
    ],
  },
];
