export default function ProjectCard({ project }) {
  if (!project) return null;

  const {
    title,
    description,
    links = {},
    stack = [],
    period,
    highlights = [],
  } = project;

  return (
    <article className="rounded-xl border border-white/10 p-4 bg-white/5 h-full">
      <h3 className="font-semibold text-white">{title}</h3>
      {period && <div className="text-xs text-gray-400 mt-0.5">{period}</div>}

      {description && (
        <p className="text-gray-300 text-sm mt-2">{description}</p>
      )}

      {Array.isArray(stack) && stack.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-3 text-xs text-gray-300">
          {stack.map((s) => (
            <li key={s} className="rounded-md border border-white/10 px-2 py-1 bg-white/5">
              {s}
            </li>
          ))}
        </ul>
      )}

      {Array.isArray(highlights) && highlights.length > 0 && (
        <ul className="mt-3 list-disc pl-4 space-y-1">
          {highlights.map((h, i) => (
            <li key={i} className="text-gray-300 text-sm">{h}</li>
          ))}
        </ul>
      )}

      <div className="mt-4 text-sm flex gap-4">
        {links?.demo && (
          <a href={links.demo} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">
            Demo →
          </a>
        )}
        {/* tampilkan repo hanya kalau berupa URL */}
        {links?.repo && String(links.repo).startsWith("http") && (
          <a href={links.repo} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">
            Repo →
          </a>
        )}
      </div>
    </article>
  );
}
