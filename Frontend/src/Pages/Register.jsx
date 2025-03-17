import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdUpload } from "react-icons/md";

const Register = () => {
  const navigate = useNavigate();
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload

    if (!passwordMatch) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const registerForm = new FormData();

      for (let key in formData) {
        registerForm.append(key, formData[key]);
      }

      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        body: registerForm,
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        alert(errorData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration failed", error.message);
    }
  };

  useEffect(() => {
    setPasswordMatch(
      formData.password === formData.confirmPassword ||
        formData.confirmPassword === ""
    );
  }, [formData.password, formData.confirmPassword]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h4 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Sign Up
        </h4>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
              passwordMatch ? "focus:ring-blue-500" : "border-red-500"
            }`}
          />
          {!passwordMatch && (
            <p className="text-red-500 text-sm">Passwords do not match!</p>
          )}

          {/* File Upload */}
          <input
            type="file"
            id="image"
            name="profileImage"
            accept="image/*"
            hidden
            onChange={handleChange}
            required
          />
          <label
            htmlFor="image"
            className="cursor-pointer flex flex-col items-center gap-2 text-gray-600"
          >
            {formData.profileImage ? (
              <img
                src={URL.createObjectURL(formData.profileImage)}
                alt="profileImg"
                className="p-1 h-16 w-16 object-cover rounded-full border border-gray-300"
              />
            ) : (
              <MdUpload className="text-tertiary text-2xl" />
            )}
            <span className="text-sm">Upload Profile Image</span>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>

          <div className="text-center text-sm text-gray-600 mt-4">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:underline ml-1">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
