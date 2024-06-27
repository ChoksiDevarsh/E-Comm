import React from 'react';
import { useNavigate } from 'react-router-dom';
import googlePlay from '../Footer/googleplay.png';
import appStore from '../Footer/appstore.png';
import faceBook from '../Footer/facebook.png'
import twitter from '../Footer/twitter.png'
import instaGram from '../Footer/instagram.png'

function Footer() {
    const navigate = useNavigate();

    const handleNavigate = (routeName) => {
        navigate(routeName);
    };

    const redirectToGooglePlay = () => {
        window.location.href = 'https://play.google.com/store';
    };

    const redirectToAppStore = () => {
        window.location.href = 'https://www.apple.com/app-store/';
    };

    const redirectToFacebook = () => {
        window.location.href = 'https://www.facebook.com/myntra'
    }

    const redirectToTwitter = () => {
        window.location.href = 'https://x.com/myntra'
    }

    const redirectToInstagram = () => {
        window.location.href = 'https://www.instagram.com/myntra/'
    }

    return (
        <div className='relative z-[5] py-[30px] pt-[40px] bg-[#FAFBFC]'>
            <footer className="max-w-[1080px] mx-auto min-w-[980px]">
                <div>
                    <div className="overflow-hidden mb-6">
                        <div className="float-left w-[155px] inline-block align-top pr-5">
                            <h4 className='text-[12px] font-bold'>ONLINE SHOPPING</h4>
                            <div className='pt-2 cursor-pointer' onClick={() => handleNavigate("/products?type=men")}>
                                Men's
                            </div>
                            <div className='pt-2 cursor-pointer' onClick={() => handleNavigate("/Women's")}>
                                Women's
                            </div>
                            <div className='pt-2 cursor-pointer' onClick={() => handleNavigate("/Kid's")}>
                                Kid's
                            </div>
                            <div className='pt-2 cursor-pointer' onClick={() => handleNavigate("/Home & Living")}>
                                Home & Living
                            </div>
                            <div className='pt-2 cursor-pointer' onClick={() => handleNavigate("/Beauty")}>
                                Beauty
                            </div>
                            <div className='mt-4 pt-4'>
                                <h4 className='text-[12px] font-bold'>USEFUL LINKS</h4>
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Blog's
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Career
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Site Maps
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Corporate Information
                            </div>
                        </div>
                        <div className='w-1/5 float-left'>
                            <h4 className='font-bold text-[12px]'>CUSTOMER POLICIES</h4>
                            <div className='pt-2 cursor-pointer'>
                                Contact Us
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                FAQ
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                T&C
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Terms Of Use
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Track Orders
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Shipping
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Cancellation
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Returns
                            </div>
                            <div className='pt-2 cursor-pointer'>
                                Privacy Policy
                            </div>
                        </div>
                        <div className='inline-block align-top pr-5 w-[360px] text-[15px] leading-[19px] float-left pt-[5px]'>
                            <h4 className='font-bold text-[#282c3f] mt-[-3px] mb-0 pt-0 pb-[25px]'>EXPERIENCE WITH MYNTRA APP</h4>
                            <div className='flex'>
                                <img src={googlePlay} alt='google play' className='cursor-pointer' onClick={redirectToGooglePlay} />
                                <img src={appStore} alt='app store' className='pl-[5px] cursor-pointer' onClick={redirectToAppStore} />
                            </div>
                            <div>
                                <h4 className='font-bold text-[#282c3f] mt-[-3px] mb-0 pt-4 pb-[25px]'> KEEP IN TOUCH </h4>
                                <div className='flex'>
                                    <img src={faceBook} alt='facebook' className='cursor-pointer' onClick={redirectToFacebook} />
                                    <img src={twitter} alt='twitter' className='cursor-pointer' onClick={redirectToTwitter} />
                                    <img src={instaGram} alt='instgram' className='cursor-pointer' onClick={redirectToInstagram} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
