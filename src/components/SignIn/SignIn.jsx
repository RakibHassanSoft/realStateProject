import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [error, setError] = useState(false)

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({
            duration: 800, // Default duration for all animations
            easing: 'ease-in-out', // Default easing for all animations
            once: true // Only run animations once
        });
    }, []);

    const navigate = useNavigate();
    const authInfo = useContext(AuthContext)

    //    console.log(authInfo)
    const { createUser ,updateUserProfile,signInByFacebook} = authInfo;
    // console.log(createUser)
    


    const handleUser = (e) => {
        setError(false)
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const url = e.target.url.value;

        const password = e.target.password.value;
        const repeat_password = e.target.repeat_password.value;
        console.log(name, email, password, url, repeat_password);
         
        if(password.lenght < 8){
            return ;
        }
        
        // createUserWithEmailAndPassword(auth,email, password)
        createUser(email, password)
            .then((result) => {
                // console.log(result.user)
                // result.user.displayName = name;
                // result.user.photoURL = url;
                updateUserProfile(name , url )
                    .then(() => {
                        // window.location.reload();
                        navigate('/');
                        success();
                    })
                    .catch((error) => {
                        
                    })
                
            })
            .catch((err) => {
                console.log(err.massage, 'not workng')
                setError(true);
              
            })
    }
    return (
        <div className="flex flex-col  justify-center gap-5 m-auto"
            style={{
                backgroundImage: 'url("https://sibarth.com/app/uploads/2023/10/rv1-9690-mg9941jpggaxxsf.jpg")',
                backgroundSize: 'cover',  // Cover the entire div area
                backgroundPosition: 'center'
                // Center the background image
            }}

        >
            <div className="flex flex-col lg:flex-row justify-center w-11/12 gap-5 lg:m-auto">
                <div className="flex flex-col "  >
                    <div data-aos="fade-left" className="lg:w-full">
                        <section className="dark:bg-gray-100 dark:text-gray-800 bg-opacity-60 bg-white m-10  rounded-lg" >
                            <div className="">
                                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12  dark:bg-violet-600 dark:text-gray-50 ">
                                    <div className="flex space-x-2 sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                            <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                            <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                            <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                    <div data-aos="fade-down" className="lg:w-full">
                        <section className="dark:bg-gray-100 dark:text-gray-800 bg-opacity-60 bg-white m-10  rounded-lg" >
                            <div className="">
                                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12  dark:bg-violet-600 dark:text-gray-50 ">
                                    <div className="flex space-x-2 sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                            <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>
                    </div>
                </div>
                <div className='lg:w-1/2 m-10'>
                    <form data-aos="fade-up" className=" mx-auto bg-opacity-60 bg-white p-5  rounded-md hover:-translate-y-1 duration-75" onSubmit={handleUser}>
                        <h1 className='text-6xl text-center font-bold mb-4 font-serif text-blue-600  '>Register</h1>
                        <div className="mb-5">
                            <label
                                htmlFor="base-input"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your name
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Jon the don"
                                id="base-input"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>




                        <div className="mb-5">
                            <label
                                htmlFor="email"

                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
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
                            <label
                                htmlFor="url"

                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Img Url
                            </label>
                            <input
                                type="text"
                                id="url"
                                name="url"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="htttps://image.jpg"
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"

                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="*********"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="repeat-password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Repeat password
                            </label>
                            <input
                                type="password"
                                placeholder="*********"
                                id="repeat-password"
                                name="repeat_password"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                required
                            />
                        </div>
                        <div>
                            <h1 className="text-center text-red-800">{error && "Already has an account Or week password"}</h1>
                        </div>
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    defaultValue
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <label
                                htmlFor="terms"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                I agree with the{" "}
                                <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                                    terms and conditions
                                </a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
                        >
                            Register new account
                        </button>
                        <Link className="ml-4 text-blue-600" to='/login'>All have an account ?</Link>
                        
                    </form>
                  
                </div>
            </div>
            <div data-aos="zoom-out" className= " w-full lg:w-11/12 bg-opacity-70 bg-white rounded-full  lg:m-10">
                <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
                                <div className="px-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
                                <div className="px-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                                    <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default SignIn;