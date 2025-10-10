import React, { useEffect, useState } from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import Spinner from '../../components/Spinner/Spinner';
import useCustomHook from '../../Hooks/useCustomHook';
import { toast } from 'react-toastify';

const Installation = () => {
  const [appsInstall, setAppsInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');
  const { loading } = useCustomHook()

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installed")) || [];
    setAppsInstall(savedList);
  }, []);


  const handleUninstall = (id) => {
    const appToUninstall = appsInstall.find(app => app.id === id);
    const updatedList = appsInstall.filter(app => app.id !== id);
    setAppsInstall(updatedList);
    localStorage.setItem("installed", JSON.stringify(updatedList));
    toast(`❌ ${appToUninstall.title} successfully uninstalled!`);
  };


  const handleSortChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);

    let sortedList = [...appsInstall];

    if (selectedOrder === 'asc') {
      sortedList.sort((a, b) => parseFloat(a.downloads) - parseFloat(b.downloads));
    } else if (selectedOrder === 'desc') {
      sortedList.sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads));
    }

    setAppsInstall(sortedList);
  };

  return (
    loading ? <Spinner/> : (<div className="py-10 px-2 md:px-6 bg-gray-50 min-h-screen">

      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-700">Your Installed Apps</h2>
        <p className="text-gray-500 pt-2 md:pt-5">Explore all apps you have installed</p>
      </div>

      {/* Sort  */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-5 gap-4">
        <span className="text-lg md:text-xl font-bold text-gray-700">
          Total Installed: {appsInstall.length}
        </span>

        <label className="form-control w-full max-w-xs rounded-sm">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option className='font-medium text-gray-500' value="none">Sort by Downloads</option>
            <option className='font-medium text-gray-500' value="asc">Low → High</option>
            <option className='font-medium text-gray-500' value="desc">High → Low</option>
          </select>
        </label>
      </div>


      <div className="max-w-6xl mx-auto">
        {appsInstall.length === 0 ? (
          <p className="text-center pt-10 text-gray-500 font-bold text-lg lg:text-3xl">No Installed Apps</p>
        ) : (
          appsInstall.map((app) => (
            <div key={app.id} className="border border-gray-200 rounded-xl p-4 my-4 shadow-sm bg-white flex justify-between items-center transition md:transform md:transition md:duration-300 md:hover:scale-101 md:hover:shadow-lg">

              {/* Card  */}

              <div className="flex gap-3 md:gap-6 items-center">
                <img src={app.image} alt={app.title} className="w-[70px] md:w-[80px] h-[70px] md:h-[80px] object-cover rounded-lg"/>
                <div className='space-y-2 md:space-y-5'>
                  <div>
                    <p className="text-lg md:text-xl font-semibold text-gray-800">{app.title}</p>
                  </div>
                  <div className='flex gap-1.5 md:gap-5 items-center'>
                    <div className='flex md:gap-2 items-center justify-center bg-green-50 px-3 py-1 rounded-sm border-1 border-green-400'>
                      <img src={downloadImg} alt="" className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]' />
                      <span className='text-green-700 px-1 md:px-0 text-[16px] md:text-md md:font-medium'>{app.downloads}</span>
                    </div>
                    <div className='flex md:gap-2 items-center justify-center bg-orange-50 px-4 py-1 rounded-sm border-1 border-orange-400'>
                      <img src={ratingImg} alt="" className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]' />
                      <span className='text-orange-400 md:font-medium'>{app.ratingAvg}</span>
                    </div>
                    <div>
                      <span className='text-gray-500 font-semibold ml-8 md:ml-0'>{app.size}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="btn bg-red-500 hover:bg-red-600 text-white btn-sm md:px-4 py-2 rounded-lg transition -mt-12 -m7 md:mt-0  md:ml-0 ">Uninstall</button>
            </div>
          ))
        )}
      </div>
    </div>)
  );
};

export default Installation;
