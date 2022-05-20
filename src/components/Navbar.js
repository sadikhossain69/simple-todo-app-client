import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center flex-col md:flex-row lg:flex-row bg-slate-300 px-3 py-3'>
            <div className='text-blue-500 font-bold text-3xl'>ToDo App</div>
            <div className='font-extrabold'>Log Out</div>
        </div>
    );
};

export default Navbar;