import React from "react";

const ToolTip = ({ children, content }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-green-700 text-white text-xs px-3 py-2 rounded-md shadow-md border border-green-900">
            {content}
      </div>
    </div>
  );
};

export default ToolTip;
