import React from 'react';
import girl from "../Projects/working-girl.gif";
import skills from "../Projects/skills.png";

const Skills = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 m-3'>
            <div className='p-5 flex'>
                <img src={girl} alt="loading...."></img>
                <h2 className='font-bold text-3xl p-4 '>My Skills</h2>
            </div>
            <div>
                <img src={skills} alt="" />
            </div>
        </div>
    );
};

export default Skills; <img src={girl} alt="loading...."></img>