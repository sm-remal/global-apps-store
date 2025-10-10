import React from 'react';
import Banner from '../Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';
import useCustomHook from '../../Hooks/useCustomHook';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const { loading } = useCustomHook();

  return (
      loading ? <Spinner></Spinner> : (<div className='bg-gray-100 min-h-screen'>
        <Banner></Banner>
        <TrendingApps></TrendingApps>
      </div>)
    )
};

export default Home; 
