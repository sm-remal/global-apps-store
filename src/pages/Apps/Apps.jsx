import React, { use, useState } from 'react';
import AllAppsShow from '../AllAppsShow/AllAppsShow';

const Apps = ({ fetchPromise }) => {
    const allAppsData = use(fetchPromise)

    const [search, setSearch] = useState('');

    const appsData = search.trim().toLowerCase();
    const searchApps = appsData ? allAppsData.filter(apps => apps.title.toLowerCase().includes(appsData)) : allAppsData;

    return (
        <div>
            <div className='text-center space-y-4 mt-10'>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-700'>Our All Applications</h2>
                <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='mt-10'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-700'>Apps Founds ({searchApps.length})</h3>
                    </div>
                    <div>
                        <label className="input w-[180px] md:w-[240px] md:mr-1 mr-4">
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 my-5'>
                    {
                        searchApps.length > 0 ? (
                            searchApps.map(allApps => (
                                <AllAppsShow key={allApps.id} allApps={allApps} />
                            ))
                        ) : (
                            <p className='col-span-full text-center text-gray-500 text-lg lg:text-3xl font-medium'>No App Found</p>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Apps;