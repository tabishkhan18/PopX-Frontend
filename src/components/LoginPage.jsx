import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className='w-screen h-screen lg:flex justify-center'>
            <section className='border border-gray-300 bg-gray-50 lg:h-lvh h-screen lg:w-1/4 w-full'>
                <section className='p-5 pt-10'>
                    <h1 className='text-3xl font-semibold'>Signin to your Popx Account</h1>
                    <h3 className='text-base text-neutral-400 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores harum aliquid</h3>
                    <div className='flex gap-2 flex-col my-5'>
                        <form action="#">
                            <div className="w-full mb-3 h-12 relative flex rounded-lg">
                                <input required className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md" id="email" type="email" />
                                <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150" htmlFor="email">
                                    Email Address</label>
                            </div>
                            <div className="w-full h-12 relative flex rounded-lg">
                                <input required className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md" id="password" type="password" />
                                <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150" htmlFor="password">
                                    Password</label>
                            </div>
                        </form>
                        <Link to={'/PopX-Frontend/Profile'}>
                        <button className='w-full py-3 font-semibold cursor-pointer rounded-lg text-white bg-[#6c25ff]'>Login</button>
                        </Link>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default LoginPage