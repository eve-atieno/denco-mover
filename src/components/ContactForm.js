import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';




const ContactForm = ({contService,setQuote}) => {
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [service, setService] = useState('');
  const [movingFrom, setMovingFrom] = useState('');
  const [movingTo, setMovingTo] = useState('');
  const [houseSize, setHouseSize] = useState('');
  const [movingDate, setMovingDate] = useState('');
  const [destinations, setDestinations] = useState('');
 
  const {id} = useParams();
  const value =useContext(AuthContext);
  console.log(value)
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user);

   const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  };

    const handleMovingFromChange = (event) => {
    setMovingFrom(event.target.value);
  };

  const handleMovingToChange = (event) => {
    setMovingTo(event.target.value);
  };

  const handleHouseSizeChange = (event) => {
    setHouseSize(event.target.value);
  };

  const handleMovingDateChange = (event) => {
    setMovingDate(event.target.value);
  };

  // useEffect(() => {
  //   console.log(value)
  //   fetch(`/Services${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDestinations(data);
  //     })
  //     .catch((error) => console.error(error));
  // }, [id]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const datat = {
      name: name,
      usr_id: user.id,
      email: email,
      phone: phone,
      service_id: id,
      moving_from: movingFrom,
      moving_to: movingTo,
      house_size: houseSize,
      moving_date: movingDate,

    };
    console.log(datat);
    fetch('https://denco.onrender.com/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datat),
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
  });
  setName ('');
  setEmail ('');
  setPhone ('');
  setMovingFrom ('');
  setMovingTo ('');
  setHouseSize ('');
  setMovingDate ('');

  };


  return (
    <>
<div  className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div>
    <h3 className='text-center text-6xl mt-6 mb-4 text-yellow-400'>Get A Quote</h3>
  {isLoggedIn ? (
    <>
   
  <div className="text-center font-serif ml-12">
    
  <form onSubmit={handleSubmit} className="container grid grid-rows-4 grid-flow-col gap-4 ml-12">
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Name *</span>
    <input
      value={name}
      onChange={handleNameChange}
     type="text" className="py-2 px-3 border rounded-lg"  />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Email *</span>
    <input 
      value={email}
      onChange={handleEmailChange}
    type="email" className="py-2 px-3 border rounded-lg"  />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Phone Number *</span>
    <input 
      value={phone}
      onChange={handlePhoneChange}
    type="tel" className="py-2 px-3 border rounded-lg"  />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Moving From *</span>
    <input 
      value={movingFrom}
      onChange={handleMovingFromChange}
    type="text" className="py-2 px-3 border rounded-lg"  />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Moving To *</span>
    <input 
      value={movingTo}
      onChange={handleMovingToChange}
    type="text" className="py-2 px-3 border rounded-lg" />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">House Size *</span>
    <input 
      value={houseSize}
      onChange={handleHouseSizeChange}
    type="text" className="py-2 px-3 border rounded-lg"  />
  </label>
  <label className="flex flex-col">
    <span className="text-lg font-semibold mb-1">Moving Date *</span>
    <input 
      value={movingDate}
      onChange={handleMovingDateChange}
    type="date" className="py-2 px-3 border rounded-lg" />
  </label>
  <button className="bg-yellow-400 text-white font-medium rounded-full py-3 px-8 hover:bg-gray-300 hover:text-black mt-5 transition-colors duration-300 hover:border-gray-400 hover:bg-gray-300 shadow-md py-2 px-6 inline-flex items-center">
       Submit
        </button>
</form>

    <div
  class="mb-4 rounded-lg text-center bg-primary-100 py-5 px-6 text-2xl text-black"
  role="alert">
  Thank You For Choosing Us. We Are Happy To Serve You.
</div>
  </div>
  </>
  ) : (
    <div className="text-center ml-12">
    <h3 className='text-center text-4xl text-yellow-400'>Please Login To Book A Service</h3>
    </div>
  )}
</div>

</div>
</>
  );
};

export default ContactForm;