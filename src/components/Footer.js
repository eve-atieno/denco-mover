import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4 flex flex-wrap">
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <h2 className="text-lg font-bold mb-2 text-yellow-400">DENCO Movers</h2>
          <p className="text-gray-500">At DENCO Movers we make your moving experience easy, we provide you with fast, efficient and reliable services. We are a registered and one of the leading and best moving companies in Kenya that provides you with professional services that reaches your expectations.</p>
        </div>
        <div className='w-full lg:w-1/3 px-4 mb-8 lg:mb-0'>
    <h3 className='text-4xl text-yellow-400'>CONTACT INFO</h3>
    <p>Ngong Road Nairobi Kenya</p>
    <p>Phone: 0705898902</p>
    <p>Email: info@DencoMovers.co.ke</p>
    <p>Open Sunday – Friday 08:00 – 18:00</p>
  </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <h2 className="text-lg font-bold mb-2 text-yellow-400">Follow Us
            <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-7 w-7"
    fill="currentColor"
    style={{color: '#1877f2'}}
    viewBox="0 0 24 24">
    <path
      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-7 w-7"
    fill="currentColor"
    style={{color: '#0077b5'}}
    viewBox="0 0 24 24">
    <path
      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-7 w-7"
    fill="currentColor"
    style={{color: '#128c7e'}}
    viewBox="0 0 24 24">
    <path
      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
</h2>

        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} DENCO MOVERS. All Rights Reserved.</p>
          <ul className="list-none flex">
            <li className="mr-6"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li className="mr-6"><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
          </ul>
        </div>
      </div>

   
    </footer>
  );
};

export default Footer;
