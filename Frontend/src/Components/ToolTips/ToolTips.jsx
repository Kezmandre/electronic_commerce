import React from "react";

const ToolTips = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      {children}
      <div className="hidden bg-black text-red-800 text-center rounded p-2 absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {text}
      </div>
    </div>
  );
};

export default ToolTips;
