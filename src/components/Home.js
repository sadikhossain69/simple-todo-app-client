import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='text-center mt-10 space-y-3'>
                <h2 className="text-3xl font-bold">
                    Welcome to Todo App😍!!!
                </h2>
                <h2 className="text-2xl font-semibold">
                    Enter What Work You Have To Do😊
                </h2>
            </div>
            <form className='text-center space-y-3 mt-5'>
                <input className='input input-bordered w-full md:w-2/5 lg:w-2/5 font-bold' type="text" placeholder='Your Name' /><br />
                <input className='input input-bordered w-full md:w-2/5 lg:w-2/5 font-bold' type="text" placeholder='Your Task' /><br />
                <input className='text-center bg-blue-600 text-white font-semibold py-1 px-4 rounded hover:bg-blue-500 hover:duration-300 hover:scale-125 cursor-pointer' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Home;