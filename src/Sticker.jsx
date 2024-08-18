import React from 'react'

const Sticker = () => {
  return (
      <div className='mt-6'>
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-header-store-202406?wid=1018&hei=386&fmt=jpeg&qlt=90&.v=1716334557950" className='w-full' alt="" />
          <p className='text-center p-4 text-black font-bold	 text-4xl'> Only at the Apple Store</p>
          <div className=' flex justify-center items-center'>
          <button className='bg-white text-blue-700 border-2 border-blue-700 font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white hover:shadow-xl'>
  Shop 
</button>
</div>
    </div>
  )
}

export default Sticker