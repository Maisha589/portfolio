import React from 'react';
import bg from "../Home/bg.jpg";
import TypeAnimation from 'react-type-animation';

const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
            <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                <div >
                    <div>
                        <h2 className="text-3xl font-bold ">Hi!</h2>
                        <h4 className="text-2xl font-semibold ">I am</h4>
                        <h1 className="text-4xl font-bold ">MAISHA RAHMAN</h1>
                    </div>
                    <div className='position: absolute m-4'>
                        <TypeAnimation
                            cursor={false}
                            sequence={['WEB DEVELOPER....................', 1000, '']}
                            wrapper="h1"
                            repeat={Infinity}
                        />
                    </div>
                </div>

                <div>
                    <img style={{ width: "100%" }} alt='' src="https://i.ibb.co/Ctrv9Mc/454-removebg-preview.png" className="max-w-sm rounded-lg shadow-2xl" />
                </div>


            </div>
        </div>

    );
};

export default Banner;