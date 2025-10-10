import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-violet-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
