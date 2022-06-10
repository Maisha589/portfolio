import React from 'react';
import girl from "../Projects/working-girl.gif";
import skills from "../Projects/skills.png";

const Skills = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mt-4 text-primary' >My professional Skills</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 m-3 justify-items-center'>
                <div className='p-5 flex'>
                    <img src={girl} alt="loading...."></img>
                </div>
                <div>
                    <img src={skills} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills; <img src={girl} alt="loading...."></img>