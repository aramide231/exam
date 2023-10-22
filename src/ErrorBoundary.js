import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: true,
    errorMessage: "error",
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return [
        <section className="test-error-page">
          <h1 className="test-error">Welcome to my Exam</h1>
          <p className="body-text">oops....</p>
          <a href="./" className="test-error-btn-container">
            <button className="test-error-btn">Take me home</button>
          </a>
        </section>
      ];  
    }
    return this.props.children;
  }
}

export default ErrorBoundary;