import React, { useState } from 'react';

const QAItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2 mx-auto w-[380px] md:w-[800px] bg-white p-4" onClick={toggleAnswer}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{question}</h3>
        <button
          className="text-brand_blue focus:outline-none"
          onClick={toggleAnswer}
        >
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QAItem;
