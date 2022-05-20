import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center flex-col md:flex-row lg:flex-row bg-slate-300 px-3 py-3 space-y-3 lg:space-y-0'>
            <div className='text-blue-500 font-bold text-3xl'>
                <Link to='/' >ToDo App</Link>
            </div>
            <div>
                <Link className='font-extrabold text-xl btn btn-primary' to='/login' >Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;