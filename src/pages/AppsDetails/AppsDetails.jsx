import React, { use } from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewsImg from '../../assets/icon-review.png'
import { useParams } from 'react-router';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AppsDetails = ({ fetchPromise }) => {
    const { id } = useParams()
    const appsId = parseInt(id)

    const AppDetails = use(fetchPromise)

    const appsDetails = AppDetails.find(singleApp => singleApp.id === appsId)

    const { title, reviews, ratingAvg, image, downloads, description, companyName, ratings } = appsDetails

    // console.log(appsDetails)
    return (
        <div className='py-16 bg-gray-100 space-y-16 px-12'>
            <div className='flex gap-16'>
                <img src={image} alt="" className='w-[300px] rounded-3xl' />
                <div className='flex-1'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{title}</h1>
                    <p className='text-lg font-medium pt-4'>Developed by: <span className='text-violet-700'>{companyName}</span></p>

                    <div className="divider"></div>

                    <div className='flex gap-12'>
                        <div className='space-y-1'>
                            <img src={downloadImg} alt="" />
                            <p className='font-medium text-gray-500'>Download</p>
                            <h2 className='font-bold text-xl md:text-3xl text-gray-800'>{downloads}</h2>
                        </div>
                        <div className='space-y-1'>
                            <img src={ratingImg} alt="" />
                            <p className='font-medium text-gray-500'>Average Rating</p>
                            <h2 className='font-bold text-xl md:text-3xl text-gray-800'>{ratingAvg}</h2>
                        </div>
                        <div className='space-y-1'>
                            <img src={reviewsImg} alt="" />
                            <p className='font-medium text-gray-500'>Total Reviews</p>
                            <h2 className='font-bold text-xl md:text-3xl text-gray-800'>{reviews}</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-white rounded-2xl shadow p-6'>
                <h2 className='text-xl md:text-2xl font-semibold text-gray-700 mb-4'>
                    Ratings
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ratings} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" reversed={true} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#7c3aed" />
                    </BarChart>
                </ResponsiveContainer>

            </div>


            <div>
                <p className='text-gray-500'><span className='text-lg text-gray-700 font-medium'>Description:</span> {description} </p>
            </div>
        </div>
    );
};

export default AppsDetails;