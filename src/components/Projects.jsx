import { ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <a
          href="https://github.com/mrbrightsides"
          target="_blank"
          rel="noreferrer"
          className="text-sm inline-flex items-center gap-1 text-blue-300 hover:text-blue-200"
        >
          All repos <ExternalLink size={14} />
        </a>
      </div>

      <p className="text-white/80 mt-2">Beberapa karya yang saya kerjakan:</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(projects) &&
          projects.map((project) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
            />
          ))
        }
      </div>
    </section>
  );
}
