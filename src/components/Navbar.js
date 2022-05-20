import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='flex justify-between items-center flex-col md:flex-row lg:flex-row bg-slate-300 px-3 py-3 space-y-3 lg:space-y-0'>
            <div className='text-blue-500 font-bold text-3xl'>
                <Link to='/' >ToDo App</Link>
            </div>
            <div>
                {
                    user ? 
                    <>
                        <button onClick={ () => signOut(auth) } className='font-extrabold text-xl btn btn-primary' >Log Out</button>
                    </>
                    :
                    <>
                        <Link className='font-extrabold text-xl btn btn-success' to='/login' >Log In</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;