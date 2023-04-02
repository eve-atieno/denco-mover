import React,{useEffect} from 'react'


const ViewQuotes = ({service}) => {
  const [quotes, setQuotes] = React.useState([]);
  useEffect(() => {
    fetch('https://denco.onrender.com/books')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);
 
  let quotesCards = quotes.map((quote) => {
    return (
      <div >
      <section className="pt-16 bg-blueGray-50">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
            <div class="rounded-t-lg h-32 overflow-hidden">
              <img class="object-cover object-top w-full" src="https://le-cdn.hibuwebsites.com/aeb1d9b09e1b4b938adfa73d1d08351c/dms3rep/multi/opt/Office-86fb027e-396w.jpg" alt='Mountain'/>
          </div>
              <div className="w-full px-4 flex justify-center">
              <div className="relative  w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-20 h-20 centre text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>
              </div>
              <div className="w-full px-4 text-center mt-5">
                <div className="text-blueGray-700 dark:text-blueGray-200 mt-2 font-bold text-xl uppercase">
                  {quote.name}
                  </div>
                </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap ">
                <div className="w-full lg:w-9/12 ">
                  <h3 className="text-3xl text-justify font-serif leading-normal mb-2 text-blueGray-700 dark:text-blueGray-200">
                    My Bookings
                  </h3>
                  <p className="text-lg text-center text-justify font-serif leading-relaxed mt-4 mb-4 text-blueGray-600 dark:text-blueGray-400">
                    Your booking details are below
                  </p>
                  <div className=" ">
                    <div className=" ">
                      <p className="text-lg font-serif leading-relaxed mt-4 mb-4 text-blueGray-600 dark:text-blueGray-400">
                        <table className="table-auto">
                          <thead>
                            <tr>
                             
                              <th className="px-4 py-2">Moving From</th>
                              <th className="px-4 py-2">Moving To</th>
                              <th className="px-4 py-2">Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>

                              <td className="border px-4 py-2">{quote.moving_from}</td>
                              <td className="border px-4 py-2">{quote.moving_to}</td>
                              <td className="border px-4 py-2">{quote.moving_date}</td>
                            </tr>
                            </tbody>
                        </table>
                      </p>
                      </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
          </div>
    )
  })

  return (
    <>
{quotesCards}

    </> 
  )
}

export default ViewQuotes
