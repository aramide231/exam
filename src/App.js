import React, { useState, useEffect } from 'react';
import './style.css';
import Content from './Content';
import Loader from './Loader';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="main-container">
      {isLoading ? <Loader /> : <Content />}
    </section>
  );
}

export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
