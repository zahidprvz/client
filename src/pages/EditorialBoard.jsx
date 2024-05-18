// client/src/pages/EditorialBoard.jsx

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EditorialBoard = () => {
  return (
    <MainLayout>
     
      <div className="container mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-semibold mb-4">Editorial Board</h1>
        <p className="text-lg">Insert editorial board content here...</p>
      </div>
     
    </MainLayout>
  );
};

export default EditorialBoard;
