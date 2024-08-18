import React from 'react';
import Video from './One.mp4';

const BackGround = () => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <video 
        src={Video} 
        className='w-full' 
        style={{ height: '500px', objectFit: 'cover' }} 
        autoPlay 
        loop 
        
      ></video>
    </div>
  );
};

export default BackGround;
