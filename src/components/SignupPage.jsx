import React from 'react'
import { Link } from 'react-router-dom'

const SignupPage = () => {
    return (
        <div className='w-screen h-screen lg:flex justify-center'>
            <section className='border border-gray-300 bg-gray-50 lg:h-lvh h-screen lg:w-1/4 w-full'>
                <section className='p-5 pt-10'>
                    <h1 className='text-3xl font-semibold'>Create your PopX Account</h1>
                    <h3 className='text-base text-neutral-400 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores harum aliquid</h3>
                    <div className='flex gap-2 flex-col my-5 '>
                        <form action="#">
                            <div className="w-full mb-3 h-12 relative flex rounded-lg">
                                <input required className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md" id="name" type="text" />
                                <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150" htmlFor="name">
                                    Full Name</label>
                            </div>
                            <div className="w-full mb-3 h-12 relative flex rounded-lg">
                                <input required className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md" id="number" type="text" />
                                <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150" htmlFor="number">
                                    Phone Number</label>
                            </div>
                            <div className="w-full mb-3 h-12 relative flex rounded-lg">
                                <input required className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md" id="email" type="email" />
                                <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150" htmlFor="email">
                                    Email Address</label>
                            </div>
                            <div className="w-full  mb-3 h-12 relative flex rounded-lg">
                                <input required className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md" id="password" type="password" />
                                <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150" htmlFor="password">
                                    Password</label>
                            </div>
                            <div className="w-full mb-3 h-12 relative flex rounded-lg">
                                <input required className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md" id="company" type="text" />
                                <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150" htmlFor="company">
                                    Company Name</label>
                            </div>
                            <label class="block text-lg font-medium text-gray-700 mb-2">Are you an agency?</label>
                            <div class="flex space-x-6">
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="agency" value="yes" class="text-blue-600 focus:ring-blue-500" />
                                    <span>Yes</span>
                                </label>
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="agency" value="no" class="text-blue-600 focus:ring-blue-500" />
                                    <span>No</span>
                                </label>
                            </div>
                        </form>
                        <Link to={'/PopX/Profile'}>
                            <button className='w-full py-3 font-semibold cursor-pointer rounded-lg text-white bg-[#6c25ff]'>Create Account</button>
                        </Link>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default SignupPage