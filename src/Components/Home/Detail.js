import React from 'react';
import { Link } from "react-router-dom";

const Detail = ({ detail }) => {
    const { name, technology, websiteDetail, website, img1, img2, img3, clientSide, liveSite, serverSite } = detail;
    return (

        <div>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className='text-5xl font-bold mt-4'>{name}</h1>
                        <p className="py-6 font-bold">{website}</p>
                        <p className="py-6">Technology used: <br /><span className='font-bold'>{technology}</span></p>
                        <p className="py-6">Website Details: <br /><span className='font-bold'>{websiteDetail}</span></p>
                        <a href={liveSite}><button className="btn btn-primary m-2">Live link</button></a>
                        <a href={clientSide}><button className="btn btn-primary m-2">Client Code link</button></a>
                        {
                            serverSite && <a href={clientSide}><button className="btn btn-primary m-2">Client Code link</button></a>
                        }
                        <Link to="/"><button className="btn btn-primary m-2">Go to home Page</button></Link>
                    </div>
                </div>
            </div>




            <div className=' grid grid-cols-2 gap-3 m-5 p-5'>
                <div className='p-3 border border-3 bg-white'>
                    <img src={img1} alt="" />
                </div>
                <div className='p-3 mb-10'>
                    {
                        img2 && <div className='border border-3 p-3 mb-5'>
                            <img src={img2} alt="" /> <br />
                        </div>
                    }
                    <div className='border border-3 p-3'>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Detail;