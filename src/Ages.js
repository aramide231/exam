import React from "react";
import { useNavigate } from "react-router-dom";

const Ages = () => {
  const navigate = useNavigate();
  const genZ = (event) => {
    navigate("/test-error");
  };

  return (
    <div className="all-ages">
      <h1>Testing ErrorBoundary</h1>
      <div className="ages">
  
          <button onClick={genZ}>ErrorBoundary</button>
      </div>
    </div>
  );
};

export default Ages;