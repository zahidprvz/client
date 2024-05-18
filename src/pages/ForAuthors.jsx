// client/src/pages/ForAuthors.jsx

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ForAuthors = () => {
  return (
    <MainLayout>
     
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">For Authors</h1>
        <p>This is the For Authors page content.</p>
      </div>
     
    </MainLayout>
  );
};

export default ForAuthors;
