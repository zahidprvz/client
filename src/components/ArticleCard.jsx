// client/src/components/ArticleCard.jsx

import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({ title, authors, abstract }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="italic mb-2">By {authors.join(', ')}</p>
      <p className="text-gray-800">{abstract}</p>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  abstract: PropTypes.string.isRequired,
};

export default ArticleCard;
