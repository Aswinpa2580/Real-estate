import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdUpload } from 'react-icons/md';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    // Add logic for API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* File Upload Section */}
          <div className="w-full border border-gray-300 rounded-md p-3 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition">
            <label htmlFor="profileImage" className="cursor-pointer flex items-center space-x-2 text-gray-700">
              <MdUpload className="text-indigo-600 text-xl" />
              <span>{formData.profileImage ? formData.profileImage.name : "Upload Profile Image"}</span>
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Register
          </button>

          <div className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-500 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
