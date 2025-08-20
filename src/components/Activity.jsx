import { motion } from "framer-motion";
import { Code2, Github, Link as LinkIcon, Timer } from "lucide-react";

/** Quick links ditampilkan di bagian bawah */
const quickLinks = [
  { label: "Hackatime Dashboard", href: "https://hackatime.hackclub.com/", icon: Timer },
  { label: "My GitHub Profile", href: "https://github.com/mrbrightsides", icon: Github },
  { label: "Wakatime (compat)", href: "https://wakatime.com/", icon: Timer },
  {
    label: "GitHub Readme Stats",
    href: "https://github.com/anuraghazra/github-readme-stats",
    icon: Code2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardHover = { whileHover: { scale: 1.01 } };

const getHackatimeImg = (id) =>
  `https://github-readme-stats.hackclub.dev/api/wakatime?username=${id}&api_domain=hackatime.hackclub.com&theme=darcula&layout=compact&langs_count=8&hide_border=true&border_radius=12`;

const getGithubStats = (user) =>
  `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=radical&hide_border=true&border_radius=12`;

const getTopLangs = (user) =>
  `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=radical&hide_border=true&border_radius=12`;

export default function Activity({
  githubUser = "mrbrightsides",
  hackatimeUserId = "19310",
}) {
  return (
    <motion.section
      id="activity"
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 border-t border-white/10"
      variants={containerStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-white"
        variants={fadeUp}
      >
        Activity & Badges
      </motion.h2>
      <motion.p
        className="mt-2 text-sm sm:text-base md:text-lg text-gray-300"
        variants={fadeUp}
      >
        Live coding stats, GitHub activity, and Hack Club progress.
      </motion.p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hackatime card */}
        <motion.div
          {...cardHover}
          variants={fadeUp}
          className="rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <h3 className="font-medium text-white mb-2 inline-flex items-center gap-2">
            <Code2 size={16} /> Hackatime (last 7 days)
          </h3>
          <a
            href="https://hackatime.hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label="Open Hackatime dashboard in a new tab"
          >
            <img
              loading="lazy"
              alt={`Hackatime weekly stats card for ${hackatimeUserId}`}
              className="w-full rounded-xl"
              src={getHackatimeImg(hackatimeUserId)}
            />
          </a>
          <p className="text-xs text-white/60 mt-2">
            * Pastikan akun Hackatime sudah tersambung & dibuat public.
          </p>
        </motion.div>

        {/* GitHub Stats card */}
        <motion.div
          {...cardHover}
          variants={fadeUp}
          className="rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <h3 className="font-medium text-white mb-2 inline-flex items-center gap-2">
            <Github size={16} /> GitHub Overview
          </h3>
          <div className="grid gap-4">
            <img
              loading="lazy"
              alt={`GitHub stats for ${githubUser}`}
              className="w-full rounded-xl"
              src={getGithubStats(githubUser)}
            />
            <img
              loading="lazy"
              alt={`Most used languages by ${githubUser}`}
              className="w-full rounded-xl"
              src={getTopLangs(githubUser)}
            />
          </div>
        </motion.div>
      </div>

      {/* Quick links row */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        {quickLinks.map((l) => {
          const Icon = l.icon ?? LinkIcon;
          return (
            <motion.a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center gap-2 hover:bg-white/10"
              {...cardHover}
              variants={fadeUp}
              aria-label={`Open ${l.label} in a new tab`}
            >
              <Icon size={16} /> <span className="truncate">{l.label}</span>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}