import axios from 'axios';
import React, { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINT } from '../../utils/constant';
import { setUser } from '../redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/MovieSlice';

export default function Header() {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      localStorage.removeItem('user'); // Remove user data from local storage
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  

  const toggleHandler = () => {
    dispatch(setToggle(!toggle));
  };

  return (
    <div className='absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black'>
      <img className='w-40 lg:w-56' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png' alt='netflix-logo' />
      {user && (
        <div className='flex items-center'>
          <IoIosArrowDropdown size={'24px'} color='white' />
          <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
          <div className='ml-4'>
            {/* Render hamburger icon only on small screens */}
            <div className='lg:hidden'>
              <button onClick={() => setMenuOpen(!isMenuOpen)} className='text-white'>
                <MenuIcon style={{ color: 'white' }} />
              </button>
              {/* Conditionally render another hamburger icon when the menu is open */}
              {isMenuOpen && (
                <button onClick={() => setMenuOpen(false)} className='text-white ml-2'>
                  <MenuIcon style={{ color: 'white' }} />
                </button>
              )}
            </div>
            {/* Render menu options for large screens */}
            <div className='hidden lg:flex items-center'>
              <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
              <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2'>{toggle ? 'Home' : 'Search Movie'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Render menu options inside hamburger icon for small screens */}
      {isMenuOpen && (
        <div className='absolute top-0 right-0 flex flex-col bg-white p-4 z-10'>
          <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2 mb-2'>Logout</button>
          <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 mb-2'>{toggle ? 'Home' : 'Search Movie'}</button>
          {/* Close button */}
          <button onClick={() => setMenuOpen(false)} className='bg-red-800 text-white px-4 py-2'>Close</button>
        </div>
      )}
    </div>
  );
}



