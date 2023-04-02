import React from 'react';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
  return (
    <>
      <div className='flex flex-row text-center  mx-5 px-5 justify-content-center'>

        <div className="flex-1 max-w-sm  hover:shadow-lg dark:hover:shadow-black/30 rounded overflow-hidden bg-slate-50 mt-5 mx-5">
          <img className="w-full h-64 object-cover" src="../images/commercial.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 font-serif">Commercial Moving</div>
            <p className="text-gray-700 text-xl font-serif">
              Be it moving an individual or a family, the process of relocation is always an emotional event. It is difficult, time-consuming, and stressful.
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-sm  hover:shadow-lg dark:hover:shadow-black/30 rounded overflow-hidden bg-slate-50 mt-5 mx-5">
          <img className="w-full h-64 object-cover" src="../images/office.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 font font-serif">Office Moving</div>
            <p className="text-gray-700  text-xl font-serif">
              Moving an office is far different from house moving. Whether it’s just moving floors or across the country, our movers are experienced and trained to effectively handle and relocate all your office.
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-sm rounded  hover:shadow-lg dark:hover:shadow-black/30 overflow-hidden bg-slate-50 mt-5 mx-5">
          <img className="w-full h-64 object-cover" src="../images/loading.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 font font-serif">Loading/Unloading</div>
            <p className="text-gray-700 text-xl font-serif">
              We are a professional moving company that provides loading and unloading services for residential and commercial moves. We have the experience and equipment to make your move as smooth as possible.
            </p>
          </div>
        </div>

      </div>

      <div className='text-center m-5'>
        <Link to="/services">
        <button className="bg-yellow-400 font-serif text-white text-center font-bold rounded-full border-b-2 border-gray-300 hover:border-gray-400 hover:bg-gray-300 shadow-md py-2 px-6 inline-flex items-center">
        See More
        </button>
        </Link>
        
      </div>
    </>
  )
}

export default GettingStarted;
