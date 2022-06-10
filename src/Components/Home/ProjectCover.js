import React from 'react';

const ProjectCover = ({ project }) => {
    const { cover, name, imgDetail } = project;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className='w-100' src={cover} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{imgDetail}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCover;