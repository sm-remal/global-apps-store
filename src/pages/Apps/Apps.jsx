import React, { useEffect, useState } from 'react';
import AllAppsShow from '../AllAppsShow/AllAppsShow';
import useCustomHook from '../../Hooks/useCustomHook';
import Spinner from '../../components/Spinner/Spinner';

const Apps = () => {

    const {allAppsData, loading} = useCustomHook()


    const [search, setSearch] = useState('');

    const [loader, setLoader] = useState(false);

    const appsData = search.trim().toLowerCase();
    const searchApps = appsData ? allAppsData.filter(apps => apps.title.toLowerCase().includes(appsData)) : allAppsData;

    useEffect(() => {
        if(appsData){
            setLoader(true);
            setTimeout(() => setLoader(false), 2000);
        }else{
            setLoader(false);
        }
    }, [appsData]);

    return (
        loading ? <Spinner/> : (<div className='bg-gray-100 min-h-screen'>
            <div className='text-center space-y-4 px-2 pt-10'>
                <h2 className='text-3xl font-bold text-gray-700'>Our All Applications</h2>
                <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='mt-5 md:mt-10 px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='pl-1'>
                        <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-700'>Apps Founds ({searchApps.length})</h3>
                    </div>
                    <div>
                        <label className="input w-[290px]  md:mr-1 mt-5 md:mt-0 focus-within:outline-0 border-2 border-violet-600">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>
               {
                  loading ? (<Spinner/>) : loader ? (<Spinner/>) : (  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5'>
                    {
                        searchApps.length > 0 ? (
                            searchApps.map(allApps => (
                                <AllAppsShow key={allApps.id} allApps={allApps} />
                            ))
                        ) : (
                            <div className='col-span-full text-center space-y-10'>
                                <p className='col-span-full text-center text-gray-500 text-lg lg:text-3xl font-medium'>No App Found</p>
                            <button onClick={() => setSearch("")} className='btn bg-gradient-to-r from-violet-700 to-violet-500 text-white'> Show All Apps</button>
                            </div>
                        )
                    }
                </div> )
               }

            </div>
        </div>)
    );
};

export default Apps;