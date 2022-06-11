import React from 'react';
import { Link } from 'react-router-dom';


const MeCard = () => {
    return (
        <div className='p-3' style={{ backgroundImage: `url(https://i.ibb.co/wr5MLbW/pink-red-aesthetic-linktree-background-2-1.png)`, backgroundSize: "cover" }}>

            <div className='w-80 m-auto'>
                <img src="https://i.ibb.co/sRXcDWB/Aboutme-2-1.png" alt="" />
            </div>
            <div className='m-5'>
                <Link to="/about"><button className='btn btn-primary hover:btn-secondary'>Know more about me</button></Link>
            </div>
        </div>
    );
};

export default MeCard;