import React from "react";
import "./Projects.scss"
import { motion } from "framer-motion"
import { ProjectsData } from "../data/Projects";

function Projects() {
    
    const letters = "My projects!".split("");

    return (
        <div className="page-div">
            <div className="projects-top">
                {letters.map((letter, index) => (
                    <motion.span className="projects-title"
                        key={index}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: index * 0.2  
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>

            <motion.div className="projects-top"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: 2.5  
                }}
            >
                <p className="projects-text">
                    Projects I have been working on, some are finished, some are not! Many shots, many opportunities.
                </p>
            </motion.div>

            <div className="projects-container">
                {ProjectsData.map((project, index) => {
                    return (
                        <div className="project-images" key={index}>
                           <img src={project.img_url} alt="images" /> 
                           <p>{project.heading}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Projects;

