import React from 'react';
import clinic from "../Projects/clinic (1).png";
import tools from "../Projects/manufacturer.png";
import perfume from "../Projects/warehouse.png";
import guide from "../Projects/Fun guide.png";
import commerce from "../Projects/e-commerce.png";
import planner from "../Projects/event planner.png";

const Projects = () => {
    return (
        <div>
            <h2 className='font-bold text-3xl text-primary m-5'>Some of my projects</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <img src={tools} alt="" />
                    <button className='btn btn-primary'>Live site</button>
                </div>
                <div>
                    <img src={planner} alt="" />
                    <button className='btn btn-primary'>Live site</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <img src={perfume} alt="" />
                    <button className='btn btn-primary'>Live site</button>
                </div>
                <div>
                    <img src={clinic} alt="" />
                    <button className='btn btn-primary'>Live site</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <img src={guide} alt="" />
                    <button className='btn btn-primary'>Live site</button>
                </div>
                <div>
                    <img src={commerce} alt="" />
                    <button className='btn btn-primary'>Live site</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;