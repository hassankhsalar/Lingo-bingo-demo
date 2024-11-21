import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you are looking for doesn't exist.
      </p>
      <button
        onClick={handleGoHome}
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-md hover:bg-blue-600 transition-all"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
