// NotFound.jsx

import React from 'react';

const NotPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - 找不到此頁面</h1>
        <p className="text-lg text-gray-600 mb-8">此頁面網址不存在</p>
        <a href="/" className="text-blue-500 hover:underline">回到首頁</a>
      </div>
    </div>
  );
};

export default NotPage;
