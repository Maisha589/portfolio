import React from 'react';
import clinic from "../Projects/clinic (1).png";
import tools from "../Projects/manufacturer.png";
import perfume from "../Projects/warehouse.png";
import guide from "../Projects/Fun guide.png";
import commerce from "../Projects/e-commerce.png";
import planner from "../Projects/event planner.png";
import proCover from "../Projects/projects(1).png";

const Projects = () => {
    return (

        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className='p-2 '>
                <img src={proCover} alt="" />
            </div>
            <div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 p-5'>
                    <div>
                        <img src={tools} alt="" />
                        <button className='btn btn-primary'>Details</button>
                    </div>
                    <div>
                        <img src={planner} alt="" />
                        <button className='btn btn-primary'>Details</button>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 p-5'>
                    <div>
                        <img src={perfume} alt="" />
                        <button className='btn btn-primary'>Details</button>
                    </div>
                    <div>
                        <img src={clinic} alt="" />
                        <button className='btn btn-primary'>Details</button>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 p-5'>
                    <div>
                        <img src={guide} alt="" />
                        <button className='btn btn-primary'>Details</button>
                    </div>
                    <div>
                        <img src={commerce} alt="" />
                        <button className='btn btn-primary'>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;