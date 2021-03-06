import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/#home">Home</a></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/about">About me</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Maisha Rahman</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contact">Contact me</a></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/about">About me</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-primary'><a rel="noopener noreferrer" href="https://drive.google.com/file/d/1IEfSfqPgsAk5ETOs2EkqAVqvTkJufnlh/view?usp=sharing" target="_blank">resume</a></button>
            </div>
        </div>
    );
};

export default Nav;