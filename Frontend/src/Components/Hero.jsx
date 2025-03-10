import React from 'react';

const Hero = () => {
  return (
    <section className='max-padd-container mt-16 xl:mt-10'>
      <div className='flex flex-col xl:flex-row gap-16'>
        {/* Left Section */}
        <div className='flex justify-center flex-1 flex-col gap-y-8 xl:max-w-[555px] relative'>
          <h1 className='h1 text-2xl md:text-3xl lg:text-4xl'>
            Invest in <span className='text-blue-400'>Your Future</span> with Confidence
          </h1>
          <p className='text-gray-600 text-base md:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui perferendis dolores odit architecto ipsa ea quidem suscipit aut est accusantium a placeat modi explicabo, dignissimos enim maiores repudiandae rem.
          </p>

          {/* Buttons */}
          <div className='flex gap-3'>
            <a href="#listing" className='bg-gray-800 text-amber-50 rounded-full px-6 py-3 hover:bg-gray-600 transition'>
              Explore Properties
            </a>
            <button className='bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition'>
              Add Property
            </button>
          </div>

          {/* Images */}
          <div className='flex relative items-center mt-6'>
            <img src="/assets/circle.png" alt="Circle" className='rounded-full h-[99px] z-30' />
            <img src="/assets/person-1.jpg" alt="Person 1" className='rounded-full h-[80px] shadow-sm absolute left-12 z-20' />
            <img src="/assets/person-2.jpg" alt="Person 2" className='rounded-full h-[80px] shadow-sm absolute left-24 z-10' />
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col gap-4 flex-1'>
          {/* Images at the top of the right section */}
          <div className='rounded-2xl h-[266px] overflow-hidden'>
            <img src="/assets/sideImg.png" alt="Side Image" className='flex rounded-xl object-cover w-full h-full' />
          </div>

          <div className='flex justify-between gap-4'>
            <div className='flex flex-1 rounded-xl overflow-hidden'>
              <img src="/assets/sideImg1.png" alt="Side Image 1" className='rounded-xl object-cover aspect-square w-full h-full' />
            </div>
            <div className='flex flex-1 rounded-xl overflow-hidden'>
              <img src="/assets/sideImg2.png" alt="Side Image 2" className='rounded-xl object-cover aspect-square w-full h-full' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;