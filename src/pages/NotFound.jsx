// client/src/pages/NotFound.jsx

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <MainLayout>
    
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
     
    </MainLayout>
  );
};

export default NotFound;
