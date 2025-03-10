import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { MdOutlineVilla } from 'react-icons/md';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiWindmill, GiCactus, GiIsland, GiBoatFishing } from 'react-icons/gi';
import {FaSkiing } from 'react-icons/fa';

const categories = [
  {
    label: "All",
    icon: <BiWorld />,
    color: "#bfdbfe", // blue-200
  },
  {
    label: "Urban Area",
    icon: <MdOutlineVilla />,
    color: "#ffe4b5", // light beige
  },
  {
    label: "Seaside",
    icon: <TbBeach />,
    color: "#e9d5ff", // purple-200
  },
  {
    label: "Wind Farm",
    icon: <GiWindmill />,
    color: "#d1fae5", // green-200
  },
  {
    label: "Rural Area",
    icon: <TbMountain />,
    color: "#ccfbf1", // teal-200
  },
  {
    label: "Desert Retreat",
    icon: <GiCactus />,
    color: "#e5e7eb", // gray-200
  },
  {
    label: "Private Island",
    icon: <GiIsland />,
    color: "#e0e7ff", // indigo-200
  },
  {
    label: "Ski Resorts",
    icon: <FaSkiing />,
    color: "#fef3c7", // yellow-200
  },
  {
    label: "Luxury Pools",
    icon: <TbPool />,
    color: "#cffafe", // cyan-200
  },
  {
    label: "Lakeside",
    icon: <GiBoatFishing />,
    color: "#bfdbfe", // blue-200
  },
];

const Listing = () => {
  return (
    <section>
      {/* Title */}
      <div className='text-center pb-16'>
        <h6 className='capitalize text-gray-600'><strong>From concept to reality</strong></h6>
        <h2 className='h2 capitalize text-gray-600 text-4xl'><strong>Discover our newest listings</strong></h2>
      </div>
      {/* Categories container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        {categories.map((category) => (
          <div key={category.label} className='bg-
          white p-4 rounded-3xl shadow-lg flex flex-col items-center'>
            <div className='mb-4' style={{ backgroundColor: category.color, borderRadius: '50%', padding: '20px' }}>
              {category.icon}
            </div>
            <h4 className='h4'><strong>{category.label}</strong></h4>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Listing;