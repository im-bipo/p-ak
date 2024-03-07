import React from 'react'
import { skills } from '../../../assets/db/data'

const Skills = () => {
    return (
        <section className="bg-primary text-white">
            <div className="container">
                <h2 className="text-center">Skills</h2>
                <div className="flex gap-5 justify-around py-10 flex-wrap">
                    {skills.map((skill) => (
                        <div className="flex flex-col items-center">
                            <img
                                src={skill.img}
                                alt=""
                                className="w-16 object-cover rounded-md h-16"
                            />
                            <h4>{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
