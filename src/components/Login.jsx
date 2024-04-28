import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { API_END_POINT } from '../../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/UserSlice';

export default function Login() {
    const [isLogin, setLogin] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.app.isLoading);

    // Check local storage for user information on page load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            const sessionTimeout = parsedUser?.sessionTimeout || 0;
            const currentTime = new Date().getTime();
            if (currentTime < sessionTimeout) {
                dispatch(setUser(parsedUser));
                navigate('/browse');
            }
        }
    }, [dispatch, navigate]);

    const loginHandler = () => {
        setLogin(!isLogin);
    };

    const handleInputData = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    const loginUser = async () => {
        dispatch(setLoading(true));
        try {
            const res = await axios.post(`${API_END_POINT}/login`, {
                email: formData.email,
                password: formData.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                const sessionTimeout = new Date().getTime() + (1000 * 60 * 60); // 1 hour session timeout
                const userData = { ...res.data.user, sessionTimeout };
                dispatch(setUser(userData));
                localStorage.setItem('user', JSON.stringify(userData)); // Store user information in local storage
                navigate('/browse');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                validationErrors.forEach(error => {
                    toast.error(error.msg); // Display each validation error message
                });
            } else {
                toast.error('An error occurred while processing your request.');
                console.log(error);
            }
        } finally {
            dispatch(setLoading(false));
        }
    };
    
    const registerUser = async () => {
        dispatch(setLoading(true));
        try {
            const res = await axios.post(`${API_END_POINT}/register`, {
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                setLogin(true);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                validationErrors.forEach(error => {
                    toast.error(error.msg); // Display each validation error message
                });
            } else {
                toast.error('An error occurred while processing your request.');
                console.log(error);
            }
        } finally {
            dispatch(setLoading(false));
        }
    };
    

    const getInputData = (event) => {
        event.preventDefault();
        if (isLogin) {
            loginUser();
        } else {
            registerUser();
        }
        setFormData({
            fullName: "",
            email: "",
            password: ""
        });
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh]' src='https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg' alt='netflix-banner' />
            </div>
            <form onSubmit={getInputData} className='flex flex-col w-11/12 sm:w-10/12 md:w-9/12 lg:w-3/12 my-32 p-12 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-80'>
                <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
                <div className='flex flex-col'>
                    {!isLogin && <input type='text' value={formData.fullName} onChange={handleInputData} name='fullName' placeholder='Full Name' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />}
                    <input type='email' value={formData.email} name='email' onChange={handleInputData} placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <input type='password' value={formData.password} name='password' onChange={handleInputData} placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{isLoading ? "loading..." : (isLogin ? "Login" : "Signup")}</button>
                    <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
                </div>
            </form>

        </div>
    );
}


