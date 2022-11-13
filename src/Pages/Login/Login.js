import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    
    const handleLogin = data =>{
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center mb-5 font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"  {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label my-2">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value="Login" />
                </form>
                <p className='text-center mt-2'>New to doctors portal <Link className='text-secondary font-bold' to='/signup'>Create an account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;