"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactElement } from "react";
import { InteractiveSurface } from "@/components/InteractiveSurface";
import { Section } from "@/components/Section";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { CodedFeatureGallery } from "@/components/projects/CodedFeatureGallery";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { otherProjects, projects } from "@/data/content";

export function Projects(): ReactElement {
  const softwareProjects = projects.filter((project) => project.type === "software");
  const hardwareProjects = projects.filter((project) => project.type === "hardware");

  return (
    <Section id="projects" eyebrow="Selected work / 04" title="Projects built to solve real problems">
      <section className="microloop-case-study">
        <div className="microloop-case-study-header">
          <div>
            <span className="technical-label">Project 01 / Complete case study</span>
            <h2>MicroLoop</h2>
          </div>
          <p>
            The product design and coded interactions below are two parts of the same
            SwiftUI application, shown together as one complete project.
          </p>
        </div>
        <FeaturedProject />
        <CodedFeatureGallery />
      </section>
      <ProjectGroup
        index="02"
        title="Software projects"
        description="Deployed interfaces built around clear architecture, secure integrations, and practical user needs."
      >
        {softwareProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectGroup>
      <ProjectGroup
        index="03"
        title="Hardware projects"
        description="Embedded systems with source code and complete schematics. Every TinkerCAD project shown here was also built and tested in real life."
      >
        {hardwareProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectGroup>
      <OtherProjects />
    </Section>
  );
}

interface ProjectGroupProps {
  index: string;
  title: string;
  description: string;
  children: ReactElement[];
}

function ProjectGroup({ index, title, description, children }: ProjectGroupProps): ReactElement {
  return (
    <section className="mt-20">
      <div className="mb-7 grid gap-4 border-y border-[var(--line)] py-5 md:grid-cols-[5rem_1fr_1fr] md:items-end">
        <span className="technical-label">{index}</span>
        <h2 className="text-3xl leading-none sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-sm leading-6 text-[var(--quiet)] md:justify-self-end">
          {description}
        </p>
      </div>
      <div className="grid gap-px bg-[var(--line)] md:grid-cols-2">{children}</div>
    </section>
  );
}

function OtherProjects(): ReactElement {
  const featuredProject = otherProjects[0];
  const supportingProjects = otherProjects.slice(1);

  return (
    <section className="mt-20">
      <div className="mb-7 grid gap-4 border-y border-[var(--line)] py-5 md:grid-cols-[5rem_1fr_1fr] md:items-end">
        <span className="technical-label">04</span>
        <h2 className="text-3xl leading-none sm:text-4xl">Other projects</h2>
        <p className="max-w-xl text-sm leading-6 text-[var(--quiet)] md:justify-self-end">
          Agentic systems, AI products, and creative-coding experiments that extend beyond the selected work above.
        </p>
      </div>

      <div className="grid gap-px bg-[var(--line)]">
        <InteractiveSurface className="grid min-h-[28rem] bg-[var(--surface)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <span className="technical-label">{featuredProject.label}</span>
              <h3 className="mt-5 max-w-3xl text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
                {featuredProject.title}
              </h3>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)]">
                {featuredProject.description}
              </p>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2" aria-label="Technologies">
              {featuredProject.tech.map((technology) => (
                <li key={technology} className="border border-[var(--line)] px-2 py-1 text-[0.62rem] uppercase text-[var(--quiet)]">
                  {technology}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center border-t border-[var(--line)] bg-black/20 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <span className="technical-label">Research to action / every morning</span>
            {featuredProject.highlights !== undefined && (
              <ol className="mt-8 space-y-8">
                {featuredProject.highlights.map((highlight, index) => (
                  <li key={highlight} className="grid grid-cols-[2.5rem_1fr] gap-4">
                    <span className="font-mono text-xs text-[var(--signal-bright)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-[var(--muted)]">{highlight}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </InteractiveSurface>

        <div className="grid gap-px bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {supportingProjects.map((project) => (
            <InteractiveSurface key={project.title} className="flex min-h-[22rem] flex-col justify-between bg-[var(--surface)] p-7 sm:p-9">
              <div>
                <span className="technical-label">{project.label}</span>
                <h3 className="mt-5 text-4xl leading-tight">{project.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                {project.highlights !== undefined && (
                  <ul className="mt-6 space-y-3 border-l border-[var(--signal)] pl-4">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-xs leading-6 text-[var(--quiet)]">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tech.map((technology) => (
                    <li key={technology} className="border border-[var(--line)] px-2 py-1 text-[0.62rem] uppercase text-[var(--quiet)]">
                      {technology}
                    </li>
                  ))}
                </ul>
                {project.projectUrl !== undefined && (
                  <a href={project.projectUrl} target="_blank" rel="noreferrer" className="command mt-7">
                    View project <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </InteractiveSurface>
          ))}
        </div>
      </div>
    </section>
  );
}
