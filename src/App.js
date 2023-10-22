import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import NotFoundPage from "./404";
import ErrorBoundary from "./ErrorBoundary";
import Loader from './Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading page
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when you're ready to load the main content
    }, 2000); // Adjust the delay time as needed
  }, []);

  return (
    <div className="main">
      {isLoading ? <Loader /> : null}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/test-error" element={<ErrorBoundary />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
