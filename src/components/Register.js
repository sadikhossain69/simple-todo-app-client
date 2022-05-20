import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import toast from 'react-hot-toast';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      
      useEffect( () => {
        if (emailUser) {
            console.log(emailUser);
            toast.success('User Logged In', {id: 'user logged in'})
        }
    }, [emailUser] )

    if(emailLoading) {
        return <Loading/>
    }

    if(emailError) {
        toast.error(emailError.message, {id: 'email error'})
    }

    const onRegister = data => {
        const email = data.email
        const password = data.password
        console.log(email, password);
        createUserWithEmailAndPassword(email, password)
        reset()
    }


    return (
        <div>
            <div className='mt-12'>
                <h2 className="text-2xl text-center font-bold text-success mb-2 underline">Register Here!</h2>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onRegister)}>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input 
                                {
                                    ...register('confirmPassword', {
                                        required: {
                                            value: true,
                                            message: "Confirm Password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 Character or Longer'
                                        }
                                    })
                                }
                                 type="password" placeholder="confirm password" className="input input-bordered font-semibold text-base" />
                                <label className="label">
                                    {errors.confirmPassword?.type === 'required' && <p className="label-text-alt text-red-500 font-semibold">{errors.confirmPassword.message}</p>}
                                    {errors.confirmPassword?.type === 'minLength' && <p className="label-text-alt text-red-500 font-semibold">{errors.confirmPassword.message}</p>}
                                </label>
                            </div>
                            <p className='font-semibold'>Already Have An Account? <Link className='text-green-600' to='/login' >Login Here</Link> </p>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
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