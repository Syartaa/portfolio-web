"use client";

import React from "react";

import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";

import SectionTitle from "./SectionTitle";
import Project from "./Project";

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section id="projects" className="mb-28 scroll-mt-28 sm:mb-40" ref={ref}>
            <SectionTitle>My projects</SectionTitle>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
export default Projects;