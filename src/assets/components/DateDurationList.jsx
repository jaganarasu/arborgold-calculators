import React from 'react';

const DateDurationList = ({ results }) => (
  <div>
    {results.map((result, index) => (
      result.error ? (
        <p key={index} className="text-danger">{result.error}</p>
      ) : (
        <div key={index} className="card mb-3 p-3 bg-light">
          <h5 className="card-title">Range {index + 1}</h5>
          <p className="card-text">Total Days: {result.days}</p>
          <p className="card-text">Weeks: {result.weeks} weeks and {result.remainderDays} days</p>
          <p className="card-text">Total Hours: {result.hours}</p>
        </div>
      )
    ))}
  </div>
);

export default DateDurationList;
