import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Login = () => {
    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({
            duration: 800, // Default duration for all animations
            easing: 'ease-in-out', // Default easing for all animations
            once: true // Only run animations once
        });
    }, []);


    const navigate = useNavigate();
    const { signIn, signInByGoogle,signInByFacebook } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const result = await signIn(email, password);
            console.log(result.user);
            navigate('/');
        } catch (error) {
            console.error('Login Error:', error.message);
            toast.error("Failed to login. Check your email or password and try again.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const signBYGoogle = () => {
        signInByGoogle()
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const signBYFacebook = () => {
        signInByFacebook()
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <ToastContainer />
            <div className="flex flex-col justify-center gap-5 m-auto"
                style={{
                    backgroundImage: 'url("https://sibarth.com/app/uploads/2023/10/rv1-9690-mg9941jpggaxxsf.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '52rem',
                }}
            >
                <div className="flex flex-col lg:flex-row justify-center w-11/12 gap-5 m-auto">
                    <div className='w-full lg:w-1/2 lg:mt-10 lg:mb-10'>
                        <form data-aos="zoom-out" className="mx-auto bg-opacity-60 bg-white p-5 rounded-md w-full" onSubmit={handleLogin}>
                            <div className="mb-5">
                                <h1 className='text-6xl text-center font-serif text-blue-600 mb-4'>Login</h1>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="name@flowbite.com"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="GRUN^%666"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    required
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <button
                                    type="submit"
                                    className="mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Login
                                </button>

                            </div>
                            <Link className="ml-4 text-blue-600" to='/register'>Do not have account ?</Link>

                            <div className='flex-col'>
                                <hr />
                                <h1 className='mb-4 text-center text-black mt-2'>Or</h1>
                                <hr />
                            </div>
                            <div className='flex justify-evenly text-black mt-4'>
                                <h1 className='btn' onClick={signBYGoogle}>Google</h1>
                                <h1 className='btn' onClick={signBYFacebook}>Facebook</h1>
                                <h1>Twitter</h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
