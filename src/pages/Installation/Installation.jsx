import React, { useEffect, useState } from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'

const Installation = () => {
  const [appsInstall, setAppsInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState('none'); 

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installed")) || [];
    setAppsInstall(savedList);
  }, []);

  
  const handleUninstall = (id) => {
    const updatedList = appsInstall.filter(app => app.id !== id);
    setAppsInstall(updatedList);
    localStorage.setItem("installed", JSON.stringify(updatedList));
    alert("App successfully uninstalled!");
  };

  
  const handleSortChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);

    let sortedList = [...appsInstall];

    if (selectedOrder === 'asc') {
      sortedList.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
    } else if (selectedOrder === 'desc') {
      sortedList.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    }

    setAppsInstall(sortedList);
  };

  return (
    <div className="py-10 px-6 bg-gray-50 min-h-screen">
      
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">Your Installed Apps</h2>
        <p className="text-gray-500 pt-5">Explore all apps you have installed</p>
      </div>

      {/* Sort  */}
      <div className="flex flex-col md:flex-row justify-around items-center mb-5 gap-4">
        <span className="text-lg md:text-xl font-bold text-gray-700">
          Total Installed: {appsInstall.length}
        </span>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option className='font-medium text-gray-500' value="none">Sort by Size</option>
            <option className='font-medium text-gray-500' value="asc">Low → High</option>
            <option className='font-medium text-gray-500' value="desc">High → Low</option>
          </select>
        </label>
      </div>

      
      <div className="max-w-4xl mx-auto">
        {appsInstall.length === 0 ? (
          <p className="text-center pt-10 text-gray-500 font-bold text-lg lg:text-3xl">No Installed Apps</p>
        ) : (
          appsInstall.map((app) => (
            <div
              key={app.id}
              className="border border-gray-200 rounded-xl p-4 my-4 shadow-sm bg-white flex justify-between items-center hover:shadow-md transition"
            >
            
              <div className="flex gap-6 items-center">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-[80px] h-[80px] object-cover rounded-lg"
                />
                <div className='space-y-4'>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{app.title}</p>
                  </div>
                    <div className='flex gap-5 items-center'>
                        <div className='flex gap-2 items-center bg-green-50 px-2 py-1 rounded-sm border-1 border-green-400'>
                        <img src={downloadImg} alt="" className='w-[20px] h-[20px]' />
                        <span className='text-green-700 font-medium'>{app.downloads}</span>
                    </div>
                    <div className='flex gap-2 items-center bg-orange-50 px-2 py-1 rounded-sm border-1 border-orange-400'>
                        <img src={ratingImg} alt="" className='w-[20px] h-[20px]' />
                        <span className='text-orange-400 font-medium'>{app.ratingAvg}</span>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <span className='text-gray-500 font-semibold'>{app.size}</span>
                    </div>
                    </div>
                </div>
              </div>

              
              <button
                onClick={() => handleUninstall(app.id)}
                className="btn bg-red-500 hover:bg-red-600 text-white btn-sm px-4 py-2 rounded-lg transition">Uninstall</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
