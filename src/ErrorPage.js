import React from 'react';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">We apologize for the inconvenience.</p>
        <p className="error-suggestion">Please try again later or contact support.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
