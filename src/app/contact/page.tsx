'use client';
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cellNumber: "",
    address: "",
    gender: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-pink-200 to-gray-400 p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-extrabold text-black text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-lg text-black font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md mt-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg text-black font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md mt-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-lg text-black font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md mt-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Cell Number */}
        <div>
          <label htmlFor="cellNumber" className="block text-lg text-black font-medium">Cell Number</label>
          <input
            type="tel"
            id="cellNumber"
            name="cellNumber"
            value={formData.cellNumber}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md mt-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your cell number"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-lg text-black font-medium">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md mt-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-lg text-black font-medium">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md mt-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-lg text-black font-medium">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-400 rounded-md mt-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            {/* Add more countries here */}
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-300 text-white p-4 rounded-md hover:bg-blue-500 transition-all duration-300 w-full mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
