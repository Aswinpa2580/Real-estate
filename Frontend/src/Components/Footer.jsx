import React from 'react';
import { BsEnvelopeFill, BsFacebook, BsGeoAltFill, BsInstagram, BsLinkedin, BsTelephoneFill, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Correct import for Link

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo */}
        <div className='text-[24px] font-bold leading-[120%]'>
          Lease<span className='text-blue-900'>Lodge</span>
        </div>

        {/* Quick Links */}
        <div className="mt-4 md:mt-0">
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className='space-y-2'>
            <li>
              <Link to="/about" className='text-gray-100 hover:text-blue-500'>About Us</Link>
            </li>
            <li>
              <Link to="/properties" className='text-gray-100 hover:text-blue-500'>Properties</Link>
            </li>
            <li>
              <Link to="/services" className='text-gray-100 hover:text-blue-500'>Services</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className='text-gray-100 hover:text-blue-500'>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-4 md:mt-0">
          <h4 className='font-bold mb-4'>Contact Us</h4>
          <p className='text-gray-100 mb-2'>
            <BsTelephoneFill className='inline-block mr-2' /> +91 (123) 456-7890
          </p>
          <p className='text-gray-100 mb-2'>
            <BsEnvelopeFill className='inline-block mr-2' />
            support@leaselodge.com
          </p>
          <p className='text-gray-100 mb-2'>
            <BsGeoAltFill className='inline-block mr-2' /> 123 Real Estate Avenue, Suite 100, New York, NY
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 md:mt-0">
          <h4 className='font-bold mb-4'>Follow Us</h4>
          <div className='flex space-x-4'>
            <a href="#" className='hover:text-blue-500'>
              <BsFacebook />
            </a>
            <a href="#" className='hover:text-blue-500'>
              <BsTwitter />
            </a>
            <a href="#" className='hover:text-blue-500'>
              <BsInstagram />
            </a>
            <a href="#" className='hover:text-blue-600'>
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;