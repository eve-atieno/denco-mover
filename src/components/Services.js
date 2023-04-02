import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Services = ({ contService }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 px-28 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {contService.map((service) => (
          <div className="flex flex-col" key={service.id}>
            <div className="flex flex-col">
              <div className="flex-1 max-w-sm hover:shadow-lg dark:hover:shadow-black/30 rounded overflow-hidden bg-slate-50 mt-5 mx-5 h-96">
                <img className="w-full h-56 object-cover" src={service.image} alt="Sunset in the mountains" />
                <div className="px-6 py-4 h-40">
                  <div className="font-bold text-2xl  font-serif">{service.name}</div>
                  <p className="text-gray-700 text-xl font-serif"> {service.description.substring(0, 100)}{service.description.length > 100 ? "..." : ""}</p>
                  <p>{service.price}</p>
                </div>
                <div className="text-center m-5">
                  <Link to={`/contact/${service.id}`}>
        <button className="bg-yellow-400 font-serif text-white text-center font-bold rounded-full border-b-2 border-gray-300 hover:border-gray-400 hover:bg-gray-300 shadow-md py-2 px-6 inline-flex items-center">
          {/* <a href="/contact" className="text-white">Get a Quote</a> */}
             Get a Quote
        </button>
        </Link>
      </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
     
      <Footer />
    </>
  )
}

export default Services;
