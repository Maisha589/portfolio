import React, { useEffect, useState } from 'react';
import girl from "../Projects/girl1.gif"
import ProjectCover from './ProjectCover';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (

        <div >
            <a href='/' name="projects"><h2 className='text-3xl font-bold mt-4 text-primary' >Some of My works</h2></a>
            <div className=' justify-items-center '>
                <div className='p-5 items-center w-80 m-auto mt-5'>
                    <img className='w-100' src={girl} alt="loading...."></img>
                </div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
                    {
                        projects.map(project => <ProjectCover key={project.id}
                            project={project}
                        ></ProjectCover>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;