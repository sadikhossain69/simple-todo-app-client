import React from 'react';
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
    return (
        <div>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-20">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div class="divider">OR</div>
                    <div className="form-control">
                        <button className="btn btn-success text-white"> <BsGoogle className='text-xl text-red-500 mr-3' />Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;