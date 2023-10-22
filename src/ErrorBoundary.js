import React, { Component } from 'react';
import ErrorPage from './ErrorPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, triggerError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error);
  }

  // Allow errors to be triggered explicitly
  triggerError = () => {
    this.setState({ triggerError: true });
  };

  render() {
    if (this.state.hasError || this.state.triggerError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;