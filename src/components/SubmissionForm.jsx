// client/src/components/SubmissionForm.jsx

import React, { useState } from 'react';

const SubmissionForm = () => {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [abstract, setAbstract] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add form submission logic here
    console.log('Form submitted:', { title, authors, abstract });
    // Clear form fields
    setTitle('');
    setAuthors('');
    setAbstract('');
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Submit Your Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-800 font-semibold mb-2">Title</label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="authors" className="block text-gray-800 font-semibold mb-2">Authors</label>
          <input
            type="text"
            id="authors"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="abstract" className="block text-gray-800 font-semibold mb-2">Abstract</label>
          <textarea
            id="abstract"
            className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-yellow-dark"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;
