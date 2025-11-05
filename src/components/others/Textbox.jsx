import React from "react";

export default function Textbox({ icon, placeholder, usage = "text" }) {
  return (
    <div className="flex border border-[rgba(255,255,255,0.1)] hover:border-slate-600 transition-all duration-500 rounded overflow-hidden shadow-sm">
      <span className="flex items-center justify-center bg-blue-600 px-4 text-white">
        {icon}
      </span>
      <input
        type={usage}
        placeholder={placeholder}
        className="flex-1 px-4 py-3 text-black bg-transparent placeholder-slate-400 focus:outline-none textbox"
      />
    </div>
  );
}
