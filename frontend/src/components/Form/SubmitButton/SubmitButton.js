import React from 'react';

function SubmitButton({ text }) {
  return <button type="submit" className="bg-cyan-50 hover:bg-cyan-100 text-teal-900 border border-cyan-500 font-bold py-2 px-4 rounded">{text}</button>;
}

export default SubmitButton;
