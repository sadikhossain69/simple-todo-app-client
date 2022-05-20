import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    useEffect( () => {
        if (emailUser) {
            console.log(emailUser);
            toast.success('User Logged In', {id: 'user logged in'})
            navigate(from, { replace: true });
        }
    }, [emailUser, navigate, from] )

    useEffect( () => {
        if(googleUser) {
            console.log(googleUser);
            toast.success('User Logged In', {id: 'user logged in'})
            navigate(from, { replace: true });
        }
    }, [googleUser, navigate, from] )

    if(emailLoading || googleLoading) {
        return <Loading/>
    }

    if(emailError || googleError) {
        toast.error(emailError.message, {id: 'email error'})
    }

    const onLogin = data => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email, password)
        reset()
    }

    return (
        <div>
            <div className='mt-12'>
                <h2 className="text-2xl text-center font-bold text-success mb-2 underline">Login Here!</h2>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onLogin)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {
                                    ...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Please Provide A Valid Email'
                                        }
                                    })
                                } type="text" placeholder="email" className="input input-bordered font-semibold text-base" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <p className="label-text-alt text-red-500 font-semibold">{errors.email.message}</p>}
                                    {errors.email?.type === 'pattern' && <p className="label-text-alt text-red-500 font-semibold">{errors.email.message}</p>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {
                                    ...register('password', {
                                        required: {
                                            value: true,
                                            message: "Password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 Character or Longer'
                                        }
                                    })
                                } type="password" placeholder="password" className="input input-bordered font-semibold text-base" />
                                <label className="label">
                                    {errors.password?.type === 'required' && <p className="label-text-alt text-red-500 font-semibold">{errors.password.message}</p>}
                                    {errors.password?.type === 'minLength' && <p className="label-text-alt text-red-500 font-semibold">{errors.password.message}</p>}
                                </label>
                            </div>
                            <p className='font-semibold'>New to Todo app? <Link className='text-green-600' to='/register' >Register Here</Link> </p>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <button onClick={ () => signInWithGoogle() } className="btn btn-success text-white"> <BsGoogle className='text-xl text-red-500 mr-3' />Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;