import React from 'react';
import mainLogo from './myntralogo.jpg';
import loginlogo from './login.png';
import logoutlogo from './logout.jpg';
import wishlist from './wishlist.jpg'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    const handleNavigate = (routeName) => {
        navigate(routeName)
    }

    return (
        <nav className='flex justify-between items-center px-24 shadow-lg'>
            <img className='h-[50px]' src={mainLogo} alt='logo' onClick={() => handleNavigate('/home')}></img>
            <div className='flex gap-10'>
                <div className='cursor-pointer' onClick={() => handleNavigate("/products?type=men")}>Men's</div>
                <div className='cursor-pointer'>Women's</div>
                <div className='cursor-pointer'>Kids's</div>
                <div className='cursor-pointer'>Home & Living</div>
                <div className='cursor-pointer'>Beauty</div>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <input className=" border border-gray -300 drop-shadow-md hover:shadow-2xl cursor-text" type="search" placeholder="Search" aria-label="Search " />
                <button className=" border border-gray-300 drop-shadow-md hover:shadow-2xl" type="submit">Search</button>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <div onClick={() => handleNavigate('/login')}>
                    <img src={loginlogo} className='h-[35px]' alt="login logo" />
                    <h5 className='text-black'>Login</h5>
                </div>
                <div onClick={() => handleNavigate('/home')}>
                    <img src={logoutlogo} className='h-[35px]' alt="logout logo" />
                    <h5 className='text-black'>Logout</h5>
                </div>
                <div onClick={()=>handleNavigate('/wishList')}>
                    <img src={wishlist} className='h-[35px]' alt='wishlist logo' />
                    <h5 className='text-black'>Wishlist</h5>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
