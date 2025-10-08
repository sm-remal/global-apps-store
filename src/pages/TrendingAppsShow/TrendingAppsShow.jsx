import React from 'react';
import { Bold, Download } from 'lucide-react';
import ratingIcon from '../../assets/icon-ratings.png'
import downloadIcon from '../../assets/icon-downloads.png'

const TrendingAppsShow = ({ apps }) => {
    // console.log(apps)
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className=''>
                <img
                    src={apps.image}
                    alt="" className='w-[300px] h-[300px] rounded-3xl lg:mt-10 xl:mt-8'/>
            </figure>
            <div className="card-body space-y-6">
                <h2 className="card-title text-xl md:text-2xl 2xl:text-3xl">{apps.title}</h2>
                <div className='flex justify-between items-center'>
                    <div className='border-1 border-green-300 bg-green-100 px-3 py-1 flex gap-2 items-center rounded-sm'>
                        <img src={downloadIcon} alt="" className='w-[20px] h-[20px]'/>
                        <h5 className='text-lg text-green-500 font-bold'>{apps.downloads}</h5>
                    </div>
                    <div className='flex items-center gap-2 border-1 border-orange-300 bg-orange-100 px-3 py-1 rounded-sm'>
                        <img src={ratingIcon} alt="" className='w-[20px]'/>
                        <h5 className='text-lg text-orange-500 font-bold'>{apps.ratingAvg}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingAppsShow;