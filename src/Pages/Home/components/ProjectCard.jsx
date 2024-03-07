import React from 'react'

const ProjectCard = ({ project }) => {
    const { id, name, description, image } = project
    return (
        <div className="card text-primary hover:bg-[#ededed] cursor-pointer">
            <img
                src={project.image}
                alt=""
                className="object-cover w-full h-[15rem] rounded-sm"
            />
            <div className="p-3">
                <h3 className="text-[1rem] line-clamp-2">{project.name}</h3>
                <p className="font-light text-sm pt-2 line-clamp-5">
                    {project.description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard
