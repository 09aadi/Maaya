import React from 'react'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto text-center'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-purple-400'> Maaya</span>
                </h1>

                <form>
                    {/* User full name */}
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-1.5">
                            <svg width="16" height="16" viewBox="1 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10L4.66667 4.66669L7.33333 10M2.66667 8.66669H6.66667M14 6.00002V10M14 8.00002C14 9.10459 13.1046 10 12 10C10.8954 10 10 9.10459 10 8.00002C10 6.89545 10.8954 6.00002 12 6.00002C13.1046 6.00002 14 6.89545 14 8.00002Z" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <input type="text" className="grow text-sm" placeholder="Fullname" />
                        </label>
                    </div>
                    {/* div end */}

                    {/* User Name */}
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow text-sm" placeholder="Username" />
                        </label>
                    </div>
                    {/* div end */}

                    {/* password div */}
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow text-sm" placeholder="Password" />
                        </label>
                    </div>
                    {/* div end */}

                    {/* confirm password div */}
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow text-sm" placeholder="Confirm Password" />
                        </label>
                    </div>
                    {/* div end */}

                    {/* gender checkbox */}

                     

                    {/* div end */}

                    <div className="btn btn-block btn-sm mt-6">SignUp</div>


                    {/* link */}
                    
                    <a href="#" className='text-xs hover:text-blue-900 mt-6 inline-block'>
                        Already have an account?
                    </a>
                    
                    {/* link end */}

                </form>
            </div>

        </div>
    )
}

export default SignUp
