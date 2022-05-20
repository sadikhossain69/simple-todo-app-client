import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='mt-12'>
                <h2 className="text-2xl text-center font-bold text-success mb-2 underline">Register Here!</h2>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="confirm password" className="input input-bordered" />
                        </div>
                        <p className='font-semibold'>Already Have An Account? <Link className='text-green-600' to='/login' >Login Here</Link> </p>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div class="divider">OR</div>
                        <div className="form-control">
                            <button className="btn btn-success text-white"> <BsGoogle className='text-xl text-red-500 mr-3' />Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;