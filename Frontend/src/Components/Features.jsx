import React from 'react';
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";

function Features() {
  return (
    <section className='max-padd-container py-16 xl:py-32'>
      {/* Title */}
      <div className='text-center pb-16'>
        <h6 className='capitalize text-gray-600'><strong>Few steps to your new home</strong></h6>
        <h2 className='h2 capitalize text-gray-600 text-4xl'><strong>This is how easy it can be</strong></h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        <div className='bg-white p-4 rounded-3xl flex flex-col items-center shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100'>
          <MdOutlineQuestionAnswer className='bold-32 mb-3 text-blue-700' />
          <h4 className='h4'><strong>Answer Questions</strong></h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Exercitationem</strong>, quos corrupti. Minima incidunt magnam quam, culpa aliquam eius nemo, maiores praesentium reprehenderit quibusdam aliquid dignissimos hic. Quo vel dolor provident.</p>
        </div>
        <div className='bg-white p-4 rounded-3xl flex flex-col items-center shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100'>
          <BiSelectMultiple className='bold-32 mb-3 text-yellow-300' />
          <h4 className='h4'><strong>Select Property</strong></h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Exercitationem</strong>, quos corrupti. Minima incidunt magnam quam, culpa aliquam eius nemo, maiores praesentium reprehenderit quibusdam aliquid dignissimos hic. Quo vel dolor provident.</p>
        </div>
        <div className='bg-white p-4 rounded-3xl flex flex-col items-center shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100'>
          <GrCertificate className='bold-32 mb-3 text-red-600' />
          <h4 className='h4'><strong>Enjoy Living</strong></h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Exercitationem</strong>, quos corrupti. Minima incidunt magnam quam, culpa aliquam eius nemo, maiores praesentium reprehenderit quibusdam aliquid dignissimos hic. Quo vel dolor provident.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;