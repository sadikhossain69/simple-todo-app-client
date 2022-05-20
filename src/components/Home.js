import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const handlTaskSubmit = data => {
        console.log(data);
        reset()
    }

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
            <div className=''>
                <form onSubmit={handleSubmit(handlTaskSubmit)} className='text-center space-y-3 mt-5'>
                    <input {...register('name', {
                        required: {
                            value: true,
                            message: 'Your Name is Required'
                        },
                        minLength: {
                            value: 3,
                            message: "Your Name Will Must 3 Character or Longer"
                        }
                    })} className='input input-bordered w-full md:w-2/5 lg:w-2/5 font-bold' type="text" placeholder='Your Name' /><br />
                    <div>
                        {errors.name?.type === 'required' && <p className="label-text-alt text-red-500 font-semibold">{errors.name.message}</p>}
                        {errors.name?.type === 'minLength' && <p className="label-text-alt text-red-500 font-semibold">{errors.name.message}</p>}
                    </div>
                    <input {...register('task', {
                        required: {
                            value: true,
                            message: 'Your Task is Required'
                        },
                        minLength: {
                            value: 3,
                            message: 'Your Task Will Must 3 Character or Longer'
                        }
                    })} className='input input-bordered w-full md:w-2/5 lg:w-2/5 font-bold' type="text" placeholder='Your Task' /><br />
                    <div>
                        {errors.task?.type === 'required' && <p className="label-text-alt text-red-500 font-semibold">{errors.task.message}</p>}
                        {errors.task?.type === 'minLength' && <p className="label-text-alt text-red-500 font-semibold">{errors.task.message}</p>}
                    </div>

                    <input className='text-center bg-blue-600 text-white font-semibold py-1 px-4 rounded hover:bg-blue-500 hover:duration-300 hover:scale-125 cursor-pointer' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Home;