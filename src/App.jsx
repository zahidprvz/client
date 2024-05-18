import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditorialBoard from './pages/EditorialBoard';
import ForAuthors from './pages/ForAuthors';
import ForReviewers from './pages/ForReviewers';
import EthicsAndPolicies from './pages/EthicsAndPolicies';
import Submission from './pages/Submission';
import SubmissionGuidelines from './pages/SubmissionGuidelines';
import PublishingCharges from './pages/PublishingCharges';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';

import Login from './pages/Login';
import Register from './pages/Register';

import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/for-authors" element={<ForAuthors />} />
        <Route path="/for-reviewers" element={<ForReviewers />} />
        <Route path="/ethics-and-policies" element={<EthicsAndPolicies />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/submission-guidelines" element={<SubmissionGuidelines />} />
        <Route path="/publishing-charges" element={<PublishingCharges />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
