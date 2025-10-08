import React from 'react';
import googleStore from '../../assets/google-play-store.jpg'
import appStore from '../../assets/app-store.jpg'
import hero from '../../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='text-center pt-8 md:pt-16 bg-gray-100'>
            <div className='space-y-5'>
                <h1 className='text-3xl lg:text-5xl font-bold'>We Build <br /><span className='text-violet-600'>Productive</span> Apps</h1>
                <p className='text-gray-500'>At Global App Store we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br class="hidden sm:block" /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-2 md:gap-4 justify-center pt-4'>
                    <Link to="https://play.google.com/store/games?hl=en">
                        <div className='flex gap-2 border-1 border-gray-300 px-3 py-2 bg-white shadow-xs rounded-sm'>
                            <img src={googleStore} alt="" className='w-[30px] h-[30px]' />
                            <p className='font-semibold text-gray-600'>Google Play Store</p>
                        </div>
                    </Link>
                    <Link to="https://www.apple.com/app-store/">
                        <div className='flex gap-2 border-1 border-gray-300 px-4 py-2 rounded-sm bg-white shadow-xs'>
                            <img src={appStore} alt="" className='w-[30px] h-[30px]' />
                            <p className='font-semibold text-gray-600'>App Store</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <img src={hero} alt="" className='w-[300px] h-auto md:w-auto' />
            </div>
            <div className='py-8 md:py-14 space-y-4 md:space-y-6 bg-gradient-to-r from-violet-700  to-violet-500'>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-white'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center px-5 md:px-0 gap-4 md:gap-32'>
                    <div className='text-center space-y-2 md:space-y-3'>
                        <h5 className='text-[10px] text-white'>Total Downloads</h5>
                        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-white'>29.6M</h1>
                        <h5 className='text-[10px] text-white'>21% More Then Last Month</h5>
                    </div>
                    <div className='text-center space-y-2 md:space-y-3'>
                        <h5 className='text-[10px] text-white'>Total Reviews</h5>
                        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-white'>906K</h1>
                        <h5 className='text-[10px] text-white'>46% More Then Last Month</h5>
                    </div>
                    <div className='text-center space-y-2 md:space-y-3'>
                        <h5 className='text-[10px] text-white'>Active Apps</h5>
                        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-white'>132+</h1>
                        <h5 className='text-[10px] text-white'>31 More Will Launch</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;