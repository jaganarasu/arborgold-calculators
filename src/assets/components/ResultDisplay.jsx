import React from 'react';

const ResultDisplay = ({ result }) => (
  <div className="mt-3 p-3 bg-light border rounded">
    <h2 className="h4">Results:</h2>
    <p>Total Days: {result.days}</p>
    <p>Weeks: {result.weeks} weeks and {result.remainderDays} days</p>
    <p>Total Hours: {result.hours}</p>
  </div>
);

export default ResultDisplay;
