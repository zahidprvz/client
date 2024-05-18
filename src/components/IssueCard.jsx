// client/src/components/IssueCard.jsx

import React from 'react';
import PropTypes from 'prop-types';

const IssueCard = ({ volume, issue, date }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">Volume {volume}, Issue {issue}</h2>
      <p className="text-gray-800">Publication Date: {date}</p>
    </div>
  );
};

IssueCard.propTypes = {
  volume: PropTypes.number.isRequired,
  issue: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default IssueCard;
