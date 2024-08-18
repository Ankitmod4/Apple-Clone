import React from 'react';

const HumanIng = () => {
  return (
    <div className='md:flex mt-6'>
      <div className='relative md:w-1/2 border-gray-300' style={{ borderWidth: '8px' }}>
        <img 
          src="https://www.apple.com/v/apple-vision-pro/e/images/overview/hero/portrait_base_us__fucaqiry5e2q_large_2x.jpg" 
          className='w-full h-auto object-cover' 
          alt="Apple Vision Pro" 
              />
              <div className='absolute inset-0  items-end justify-center flex   '>
              
           <div className='p-4 gap-6 items-end flex justify-center h-full'>
           <button className='bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 border-2 border-solid border-green-800 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl mb-10'>
   Learn More
</button>
                  <button className='bg-white text-blue-700 border-2 border-blue-700 font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white hover:shadow-xl mb-10'>
                      Buy
                      </button>
                      </div>
        </div>
      </div>
      <img 
        src="https://th.bing.com/th/id/OIP.iBcts57IDQHnK46MbdyLEwHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
        className='w-full md:w-1/2 border-gray-300' 
        style={{ borderWidth: '8px' }}
        alt="Product Image" 
      />
    </div>
  );
};

export default HumanIng;
