import React from "react";

const Spinner = () => {
    return (
        <div className="flex justify-center h-12 items-center bg-white">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-violet-600 rounded-full animate-spin"></div>
        </div>
        
    );
};

export default Spinner;
