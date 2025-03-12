import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdUpload } from "react-icons/md";

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    console.log("Registration successful:", { firstname, lastname, email, password, profileImage });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <h4 className="text-2xl font-bold mb-4 text-center">Sign Up</h4>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="mb-4">
            <input 
              type="text" 
              name='firstname' 
              placeholder='First Name' 
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input 
              type="text" 
              name='lastname' 
              placeholder='Last Name' 
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input 
              type="password" 
              name='password' 
              placeholder='Password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input 
              type="password" 
              name='confirmPassword' 
              placeholder='Confirm Password' 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input type="file" name="profileImage" id="image" accept='image/*' hidden onChange={handleImageChange} />
          <label htmlFor="image" className="flex items-center cursor-pointer gap-2 text-blue-600 hover:underline">
            <MdUpload className="text-2xl" />
            <span>{profileImage ? profileImage.name : "Upload Profile Image"}</span>
          </label>

          <button 
            type='submit' 
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>

          <div className="mt-4 text-center">
            Already have an account? 
            <Link to="/login" className="text-blue-600 hover:underline"> Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
