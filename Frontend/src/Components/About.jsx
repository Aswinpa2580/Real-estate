import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

const About = () => {
  return (
    <section className='max-padd-container py-16 xl:py-28'>
      <div className='flex flex-col xl:flex-row gap-10'>
        {/* Left - Image */}
        <div className='flex-1'>
          <img src="/assets/about.png" alt="About" className='h-[511px] rounded-xl' />
        </div>
        
        {/* Right - Listing */}
        <div className='flex-1 flex flex-col justify-center'>
          {/* Title */}
          <div className='text-center pb-16'>
            <h6 className='capitalize text-gray-600'><strong>Few steps to your new home</strong></h6>
            <h2 className='h2 capitalize text-gray-600 text-4xl'><strong>This is how easy it can be</strong></h2>
          </div>
          <ul>
            <li className='flex items-center gap-x-3 py-2'>
              <BsCheck2Circle /> Access exclusive property listings
            </li>
            <li className='flex items-center gap-x-3 py-2'>
              <BsCheck2Circle /> Expert advice from local real estate professionals
            </li>
            <li className='flex items-center gap-x-3 py-2'>
              <BsCheck2Circle /> Find your dream home in prime locations
            </li>
            <li className='flex items-center gap-x-3 py-2'>
              <BsCheck2Circle /> Seamless online property search experience
            </li>
            <li className='flex items-center gap-x-3 py-2'>
              <BsCheck2Circle /> Get personalized property recommendations
            </li>
            <li className='flex items-center gap-x-3 py-2'>
              <BsCheck2Circle /> Transparent and hassle-free transactions
            </li>
            <li className='flex items-center gap-x-3 py-2'>
              <BsCheck2Circle /> 24/7 customer support for all your inquiries
            </li>
            <li className='flex items-center gap-x-3 py-2'>
              <BsCheck2Circle /> Comprehensive market analysis and reports
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;