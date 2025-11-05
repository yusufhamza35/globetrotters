import React from "react";
import { Link } from "react-router-dom";

export default function PulsingButton({ text, icon = "", href = "" }) {
  return (
    <>
      <style>{`
        .pulse-button {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 9999px; 
          box-shadow: 0 0 0 0 rgba(88, 120, 243, 0.7);
          animation: pulse 2s infinite;
          pointer-events: none; 
          z-index: 0;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(88, 120, 243, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(88, 120, 243, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(88, 120, 243, 0);
          }
        }
        .button-wrapper {
          position: relative;
          display: inline-block;
          z-index: 1;
        }
      `}</style>

      <div className="button-wrapper">
        <div className="pulse-button"></div>
        <Link
          to={href}
          className="bg-blue-500 flex items-center justify-center gap-1 transition-all duration-500 hover:bg-blue-600  text-white font-bold text-sm cursor-pointer p-4 rounded-full relative z-10"
        >
          {icon} {text}
        </Link>
      </div>
    </>
  );
}
