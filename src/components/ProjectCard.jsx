import { ExternalLink } from "lucide-react";

export default function ProjectCard({ p }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
      <p className="mt-2 text-sm text-gray-300">{p.desc}</p>

      {p.tags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-black/40 border border-white/10 px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {p.links?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200"
            >
              <ExternalLink size={14} /> {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
