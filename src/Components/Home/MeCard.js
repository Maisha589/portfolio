import React from 'react';
import meCard from "../Projects/mecard.png";
import bg from "../Projects/bg2.jpg";
import { Link } from 'react-router-dom';


const MeCard = () => {
    return (
        <div className="hero min-h-screen mt-5" style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
            <div className='grid grid-rows-1 items-center w-80 m-auto mt-5' style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
                <div className='justify-items-center'>
                    <img src={meCard} alt="" />
                </div>
                <div className='m-5'>
                    <Link to="/about"><button className='btn btn-primary hover:btn-secondary'>Know more about me</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MeCard;