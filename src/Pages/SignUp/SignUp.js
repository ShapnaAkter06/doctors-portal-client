import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center mb-5 font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-700 mt-2' >{errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email must be provided",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-700 mt-2' >{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                                pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong'}
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-700 mt-2' >{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value="Sign Up" />
                </form>
                <p className='text-center mt-2'>Already have an account? <Link className='text-secondary font-bold' to='/login'>Please Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;