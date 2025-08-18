import React from "react";

function Button({ children, onClick, type = "button", disabled = false, className = "" }) {
    return (

        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 
            font-semibold 
            rounded 
            text-white 
            bg-blue-600 
            hover:bg-blue-700 
            disabled:bg-gray-400 
            disabled:cursor-not-allowed
            transition
        ${className}`}
        >
            {children}
        </button>
    )
}
export default Button;