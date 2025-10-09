import React from 'react';
import { Bold, Download } from 'lucide-react';
import ratingIcon from '../../assets/icon-ratings.png'
import downloadIcon from '../../assets/icon-downloads.png'
import { Link } from 'react-router';

const TrendingAppsShow = ({ apps }) => {

    return (
        <Link to={`/apps/${apps.id}`}>
            <div className="card bg-base-100 shadow-sm md:transform md:transition md:duration-300 md:hover:scale-103 md:hover:shadow-xl">
                <figure className=''>
                    <img src={apps.image} alt="" className='w-[310px] md:w-[260px] 2xl:w-[325px] h-[270px] rounded-2xl mt-6 xl:mt-4' />
                </figure>
                <div className="card-body space-y-6">
                    <h2 className="card-title text-xl text-gray-800 font-semibold md:text-xl 2xl:text-2xl">{apps.title}</h2>
                    <div className='flex justify-between items-center'>
                        <div className='border-1 border-green-300 bg-green-100 px-3 py-1 flex gap-2 items-center rounded-sm'>
                            <img src={downloadIcon} alt="" className='w-[20px] h-[20px]' />
                            <h5 className='text-lg text-green-500 font-bold'>{apps.downloads}</h5>
                        </div>
                        <div className='flex items-center gap-2 border-1 border-orange-300 bg-orange-100 px-3 py-1 rounded-sm'>
                            <img src={ratingIcon} alt="" className='w-[20px]' />
                            <h5 className='text-lg text-orange-500 font-bold'>{apps.ratingAvg}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingAppsShow;