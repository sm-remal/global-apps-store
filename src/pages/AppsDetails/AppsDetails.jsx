import React, { use, useState, useEffect } from 'react';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import reviewsImg from '../../assets/icon-review.png';
import { Link, useParams } from 'react-router';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

// Promise Fetch 
const AppsDetails = ({ fetchPromise }) => {
  const { id } = useParams();
  const appsId = parseInt(id);

  const AppDetails = use(fetchPromise);


  const appsDetails = AppDetails.find(singleApp => singleApp.id === appsId);

  const { title, reviews, size, ratingAvg, image, downloads, description, companyName, ratings } = appsDetails;


  const [isInstalled, setIsInstalled] = useState(false);


  useEffect(() => {
    const existingAppsList = JSON.parse(localStorage.getItem("installed")) || [];
    const alreadyInstalled = existingAppsList.some(app => app.id === appsDetails.id);
    if (alreadyInstalled) {
      setIsInstalled(true);
    }
  }, [appsDetails.id]);


  const handleInstall = () => {
    const existingAppsList = JSON.parse(localStorage.getItem("installed")) || [];
    const isDuplicate = existingAppsList.some(app => app.id === appsDetails.id);

    if (isDuplicate) {
      alert(`${title} is already installed!`);
      setIsInstalled(true);
      return;
    }

    const updatedAppsList = [...existingAppsList, appsDetails];
    localStorage.setItem("installed", JSON.stringify(updatedAppsList));

    alert(` ${title} installed successfully!`);
    setIsInstalled(true);
  };

  return (
    <div className='py-5 md:py-16 bg-gray-100 space-y-16 px-5 md:px-12'>
      {/*  Top App Info Section */}
      <div className='flex flex-col md:flex-row gap-16'>
        <div className='flex justify-center items-center md:pt-4'>
          <img src={image} alt="" className='w-[300px] rounded-3xl' />
        </div>
        <div className='flex-1'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{title}</h1>
          <p className='text-lg font-medium pt-4'>
            Developed by: <span className='text-violet-700'>{companyName}</span>
          </p>

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

          {/* Install Button */}
          <div className='mt-6'>
            <Link to="">
              <button
                onClick={handleInstall}
                disabled={isInstalled}
                className={`btn bg-gradient-to-r from-violet-700 to-violet-500 text-white 
                  ${isInstalled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 duration-200'}`}
              >
                {isInstalled ? 'Installed' : `Install Now (${size})`}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Ratings Chart Section */}
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

      {/* Description Section */}
      <div className=''>
        <div className='text-gray-500 space-y-2'>
          <h3 className='text-xl text-gray-700 font-bold'>Description:</h3> 
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
