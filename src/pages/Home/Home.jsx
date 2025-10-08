import React from 'react';
import Banner from '../Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';


const Home = ({fetchPromise}) => {
    
    return (
        <div>
            <Banner></Banner>
            <TrendingApps fetchPromise={fetchPromise}></TrendingApps>
        </div>
    );
};

export default Home;