import React from 'react'

const ImageText = () => { 
  return (
      <div className='mt-6 flex justify-center bg-black flex-col'>
          <div className=''>
          <div className='text-center p-4 text-white font-bold	 text-7xl	'>iPhone</div>
          <div className='p-4 text-white font-semibold text-4xl text-center'>Our Most Powerful Cameras Yet. <br></br> Ultrafast chips. And USB-C</div>
          <div className='flex justify-center p-4 gap-5 '>
          <button className='bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 border-2 border-solid border-blue-800 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
  Learn More
</button>

<button className='bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 border-2 border-solid border-green-800 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
  Shop iPhone
</button>

              </div>
          </div>
        <img src="https://th.bing.com/th/id/OIP.NpD5cYfpHDbI_ZoA2I18OwHaFj?w=244&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7" className='p-0 m-0' alt="" />
      </div>
      
  )
}

export default ImageText