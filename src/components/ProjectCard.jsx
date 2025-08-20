export default function ProjectCard({ project }) {
  const { title, period, description, stack = [], links = {}, highlights = [] } = project;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base md:text-lg font-semibold text-white">{title}</h3>
        {period && <span className="text-xs text-white/50">{period}</span>}
      </div>

      {description && (
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      )}

      {Array.isArray(highlights) && highlights.length > 0 && (
        <ul className="mt-3 text-xs text-gray-400 list-disc list-inside space-y-1">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      {Array.isArray(stack) && stack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[11px] rounded-lg bg-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {(links.demo || links.repo) && (
        <div className="mt-4 flex items-center gap-4 text-sm">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Demo
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Repo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
