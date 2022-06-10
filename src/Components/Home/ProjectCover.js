import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCover = ({ project }) => {
    const { id, cover, name, imgDetail } = project;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cover} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body w-98 items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{imgDetail}</p>
                <div className="card-actions">
                    <Link id={id} to={`/details/${id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCover;