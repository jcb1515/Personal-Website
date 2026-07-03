"use client";

import type { ReactElement } from "react";
import { Section } from "@/components/Section";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { CodedFeatureGallery } from "@/components/projects/CodedFeatureGallery";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/content";

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
        description="Embedded systems presented with source code, working circuit designs, and complete schematics."
      >
        {hardwareProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectGroup>
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
