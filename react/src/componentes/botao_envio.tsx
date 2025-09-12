import React from 'react';
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 46 44">
    <g fill="none" stroke="#0f172a" strokeWidth="3">
      <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
    </g>
  </svg>
);

const SubmitButton = () => (
   <button
      type="submit"
      aria-label="Calculate age"
      className="bg-cyan-400 p-4 rounded-full absolute right-1/2 translate-x-1/2 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-200"
    >
      <ArrowIcon />
    </button>
);

export default SubmitButton;