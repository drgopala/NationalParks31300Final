import React from "react";

const Accordion = ({ title, content, isOpen, setIsOpen }) => {
  return (
    <div className="border-b border-green-500">
      <button
        className="w-full text-left py-3 px-5 text-base font-semibold text-green-800 bg-green-100 hover:bg-green-200 focus:outline-none flex justify-between items-center rounded-t"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="px-5 py-3 text-green-700 bg-green-50 border-t border-green-500">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
