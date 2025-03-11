import React from 'react';

const Account = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">My Account</h1>
      <div className="bg-white rounded-lg shadow p-8">
        <p className="text-gray-600">Please log in to view your account details.</p>
        <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
          Login
        </button>
      </div>
    </div>
  );
};

export default Account;