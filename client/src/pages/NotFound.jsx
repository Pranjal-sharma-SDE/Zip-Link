import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img
          src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1694984465/de767369724fb71fc2b5_l023a3.svg"
          alt="404 Not Found"
          className="w-64 mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg">
          Oops! The page you are looking for might be in another galaxy.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
