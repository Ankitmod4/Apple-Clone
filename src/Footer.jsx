import React from 'react';

const Footer = () => {
  return (
    <div className='lg:flex lg:gap-20 p-6 bg-gray-100 text-gray-800'>
      {/* Shop And Learn Section */}
      <div className='mb-4 lg:mb-0'>
        <input type='checkbox' id='shop' className='hidden peer' />
        <label 
          htmlFor='shop' 
          className='cursor-pointer flex justify-between items-center peer-checked:after:rotate-180 bg-gray-200 p-3 rounded-md shadow-md'>
          <h2 className='text-lg font-semibold'>Shop And Learn</h2>
          <span className='ml-auto transform transition-transform duration-300 text-gray-600'>▼</span>
        </label>
        <ul className='list-none hidden peer-checked:block lg:block mt-2 pl-5'>
          <li className='hover:text-blue-600'>Store</li>
          <li className='hover:text-blue-600'>Mac</li>
          <li className='hover:text-blue-600'>Ipad</li>
          <li className='hover:text-blue-600'>Iphone</li>
          <li className='hover:text-blue-600'>Watch</li>
          <li className='hover:text-blue-600'>Vision</li>
          <li className='hover:text-blue-600'>AirPods</li>
          <li className='hover:text-blue-600'>TV & HOME</li>
          <li className='hover:text-blue-600'>Air Tags</li>
          <li className='hover:text-blue-600'>Gift Cards</li>
        </ul>
      </div>

      {/* Account Section */}
      <div className='mb-4 lg:mb-0'>
        <input type='checkbox' id='account' className='hidden peer' />
        <label 
          htmlFor='account' 
          className='cursor-pointer flex justify-between items-center peer-checked:after:rotate-180 bg-gray-200 p-3 rounded-md shadow-md'>
          <h2 className='text-lg font-semibold'>Account</h2>
          <span className='ml-auto transform transition-transform duration-300 text-gray-600'>▼</span>
        </label>
        <ul className='list-none hidden peer-checked:block lg:block mt-2 pl-5'>
          <li className='hover:text-blue-600'>Manage Your Apple Account</li>
          <li className='hover:text-blue-600'>Apple Store Account</li>
          <li className='hover:text-blue-600'>iCloud.com</li>
        </ul>
      </div>

      {/* Apple Store Section */}
      <div className='mb-4 lg:mb-0'>
        <input type='checkbox' id='store' className='hidden peer' />
        <label 
          htmlFor='store' 
          className='cursor-pointer flex justify-between items-center peer-checked:after:rotate-180 bg-gray-200 p-3 rounded-md shadow-md'>
          <h2 className='text-lg font-semibold'>Apple Store</h2>
          <span className='ml-auto transform transition-transform duration-300 text-gray-600'>▼</span>
        </label>
        <ul className='list-none hidden peer-checked:block lg:block mt-2 pl-5'>
          <li className='hover:text-blue-600'>Find A Store</li>
          <li className='hover:text-blue-600'>Genius Bar</li>
          <li className='hover:text-blue-600'>Today At Apple</li>
          <li className='hover:text-blue-600'>Apple Camp</li>
          <li className='hover:text-blue-600'>Apple Store app</li>
        </ul>
      </div>

      {/* For Business Section */}
      <div className='mb-4 lg:mb-0'>
        <input type='checkbox' id='business' className='hidden peer' />
        <label 
          htmlFor='business' 
          className='cursor-pointer flex justify-between items-center peer-checked:after:rotate-180 bg-gray-200 p-3 rounded-md shadow-md'>
          <h2 className='text-lg font-semibold'>For Business</h2>
          <span className='ml-auto transform transition-transform duration-300 text-gray-600'>▼</span>
        </label>
        <ul className='list-none hidden peer-checked:block lg:block mt-2 pl-5'>
          <li className='hover:text-blue-600'>Apple and business</li>
          <li className='hover:text-blue-600'>Shop For business</li>
        </ul>
      </div>

      {/* Apple Values Section */}
      <div className='mb-4 lg:mb-0'>
        <input type='checkbox' id='values' className='hidden peer' />
        <label 
          htmlFor='values' 
          className='cursor-pointer flex justify-between items-center peer-checked:after:rotate-180 bg-gray-200 p-3 rounded-md shadow-md'>
          <h2 className='text-lg font-semibold'>Apple Values</h2>
          <span className='ml-auto transform transition-transform duration-300 text-gray-600'>▼</span>
        </label>
        <ul className='list-none hidden peer-checked:block lg:block mt-2 pl-5'>
          <li className='hover:text-blue-600'>Accessibility</li>
          <li className='hover:text-blue-600'>Environment</li>
          <li className='hover:text-blue-600'>Education</li>
          <li className='hover:text-blue-600'>Privacy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
