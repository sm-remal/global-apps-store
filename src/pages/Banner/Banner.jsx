import React from 'react';
import googleStore from '../../assets/google-play-store.jpg'
import appStore from '../../assets/app-store.jpg'
import hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='text-center pt-16 bg-gray-100'>
            <div className='space-y-5'>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>We Build <br /><span className='text-violet-600'>Productive</span> Apps</h1>
                <p className='text-gray-500'>At Global App Store we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-4 justify-center pt-4'>
                    <div className='flex gap-2 border-1 border-gray-300 px-3 py-2 rounded-sm'>
                        <img src={googleStore} alt="" className='w-[30px] h-[30px]'/>
                        <p className='font-semibold text-gray-600'>Google Play Store</p>
                    </div>
                    <div className='flex gap-2 border-1 border-gray-300 px-4 py-2 rounded-sm'>
                        <img src={appStore} alt="" className='w-[25px] h-[25px]'/>
                        <p className='font-semibold text-gray-600'>App Store</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <img src={hero} alt="" />
            </div>
            <div className='py-14 space-y-6 bg-gradient-to-r from-violet-700  to-violet-500'>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-white'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center gap-32'>
                    <div className='text-center space-y-3'>
                        <h5 className='text-xs text-white'>Total Downloads</h5>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>29.6M</h1>
                        <h5 className='text-xs text-white'>21% More Then Last Month</h5>
                    </div>
                    <div className='text-center space-y-3'>
                        <h5 className='text-xs text-white'>Total Reviews</h5>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>906K</h1>
                        <h5 className='text-xs text-white'>46% More Then Last Month</h5>
                    </div>
                    <div className='text-center space-y-3'>
                        <h5 className='text-xs text-white'>Active Apps</h5>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>132+</h1>
                        <h5 className='text-xs text-white'>31 More Will Launch</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;