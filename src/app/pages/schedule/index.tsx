import React from 'react';
import bg from '@/app/assets/schedulebackground.png';

const Schedule = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className='flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 md:px-8 lg:px-10 text-center'
    >
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
        Hello world
      </h1>
    </div>
  );
};

export default Schedule;
