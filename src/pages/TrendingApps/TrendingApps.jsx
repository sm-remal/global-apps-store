import React, { use } from 'react';
import TrendingAppsShow from '../TrendingAppsShow/TrendingAppsShow';
import { Link } from 'react-router';

const TrendingApps = ({ fetchPromise }) => {
  const mobileApps = use(fetchPromise)
  const someApps = mobileApps.slice(0, 8);
  console.log(someApps)
  return (
    <div className='py-14 bg-gray-100'>
      <div className='text-center space-y-5'>
        <h3 className='text-lg md:text-2xl lg:text-3xl font-bold'>Trending Apps</h3>
        <span className='text-gray-500'>Explore All Trending Apps on the Market developed by us</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10'>
        {
          someApps.map(apps => <TrendingAppsShow key={apps.id} apps={apps}></TrendingAppsShow>)
        }
      </div>
      <div className='text-center mt-12'>
        <Link to="/apps"><button className='btn bg-gradient-to-r from-violet-700 to-violet-500 text-white'> Show All Apps</button></Link>
      </div>
    </div>
  );
};

export default TrendingApps;