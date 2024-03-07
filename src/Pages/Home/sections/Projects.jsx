import React from 'react'
import { project as projects } from '../../../assets/db/data'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    return (
        <section className="bg-[#161616] text-white">
            <div className="container">
                <h2 className="text-center">Projects</h2>
                <div className="flex gap-2 pt-10 justify-center  w-fit m-auto flex-wrap">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
