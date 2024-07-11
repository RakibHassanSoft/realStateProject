import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logout successfull")
            })
            .catch(() => {
                console.log(err.massage)
            })
    }



    const links =
        <>
            <li className='bg-blue-600 text-white rounded-xl mr-4 p-1 '><NavLink  to='/'>Home</NavLink></li>
            {
                user && <li className='bg-blue-600 text-white rounded-xl mr-4   p-1'><NavLink to='/updateProfile'>Update profile</NavLink></li>
            }
            <li className='bg-blue-600 text-white rounded-xl mr-4  p-1'><NavLink to='/properties'>Properties</NavLink></li>
            <li className='bg-blue-600 text-white rounded-xl mr-4  p-1'><NavLink to='/blog'>Blog</NavLink></li>

        </>
    return (
        <div className=' top-0 z-10 m-at sticky box-border '>
            <div className="navbar bg-base-100  bg-opasity-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost text-4xl text-white bg-blue-700 animate-pulse rounded-full lg:ml-10 ">ReSt</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex flex-row-reverse gap-2">
                        {!user && (
                            <>
                                <div className="">
                                    <button ><NavLink  className='btn bg-blue-600 text-white rounded lg:mr-10 hover:bg-black' to="/register">Register</NavLink></button>
                                </div>
                                <div className="">
                                    <button ><NavLink className='btn bg-blue-600 text-white rounded mr-2 hover:bg-black' to="/login">Login</NavLink></button>
                                </div>
                            </>
                        )}
                        {
                            user && (<>
                
                                <div className="form-control">
                                    <button  onClick={handleLogOut}><NavLink className='btn bg-blue-600 text-white rounded mr-2 hover:bg-black' to="/">Logout</NavLink></button>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        {links}
                                    </ul>
                                </div>
                            </>)
                        }

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;