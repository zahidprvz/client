import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white font-bold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-3 px-4 focus:outline-none focus:border-indigo-500 transition duration-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white font-bold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-3 px-4 focus:outline-none focus:border-indigo-500 transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-bold mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-3 px-4 focus:outline-none focus:border-indigo-500 h-48 resize-none transition duration-300"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 w-full transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Contact;
