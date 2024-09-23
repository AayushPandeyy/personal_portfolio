import React, { useState } from "react";

const Alert = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  // Determine the alert style based on type
  const alertStyles = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
  };

  const iconStyles = {
    success: "✅", // Success Icon (you can use better icons like Font Awesome)
    error: "❌", // Error Icon
    warning: "⚠️", // Warning Icon
    info: "ℹ️", // Info Icon
  };

  return (
    <div
      className={`max-w-lg mx-auto p-4 rounded-lg shadow-md mb-4 flex items-center justify-between ${alertStyles[type]}`}
      role="alert"
    >
      <div className="flex items-center">
        <span className="mr-2 text-2xl">{iconStyles[type]}</span>
        <p>{message}</p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-xl font-bold focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;
