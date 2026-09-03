"use client";

import { ArrowUpRight, Download } from "lucide-react";
import type { ReactElement } from "react";
import { InteractiveSurface } from "@/components/InteractiveSurface";
import { ProjectMediaViewer } from "@/components/projects/ProjectMediaViewer";
import type { Project } from "@/data/content";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps): ReactElement {
  const hasSchematic = "schematicImage" in project;
  const hasCode = "codePath" in project;
  const hasProjectUrl = "projectUrl" in project;

  return (
    <InteractiveSurface className="flex h-full flex-col bg-[var(--surface)] will-change-transform">
      <ProjectMediaViewer
        image={project.image}
        schematicImage={hasSchematic ? (project.schematicImage ?? null) : null}
        title={project.title}
        type={project.type === "hardware" ? "hardware" : "software"}
      />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-3xl leading-tight">{project.title}</h3>
        <p className="mt-5 flex-1 text-sm leading-7 text-[var(--muted)]">
          {project.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((technology) => (
            <li key={technology} className="border border-[var(--line)] px-2 py-1 text-[0.62rem] uppercase text-[var(--quiet)]">
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          {hasProjectUrl && (
            <a href={project.projectUrl} target="_blank" rel="noreferrer" className="command">
              View project <ArrowUpRight size={16} />
            </a>
          )}
          {hasCode && (
            <a href={project.codePath} download className="command">
              Code <Download size={16} />
            </a>
          )}
        </div>
      </div>
    </InteractiveSurface>
  );
}
