import React from "react";
import { FaBullhorn } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const iconMap = {
  info: <IoMdInformationCircleOutline className="text-blue-600" />,
  success: <AiOutlineCheckCircle className="text-green-600" />,
  error: <MdErrorOutline className="text-red-600" />,
  warning: <FaBullhorn className="text-yellow-600" />,
};

const bgMap = {
  info: "bg-blue-100",
  success: "bg-green-100",
  error: "bg-red-100",
  warning: "bg-yellow-100",
};

export default function Alert({ type = "info", content }) {
  return (
    <div
      className={`flex w-full items-start gap-3 p-4 rounded-md shadow-sm ${bgMap[type]}`}
    >
      <div className="text-xl">{iconMap[type]}</div>
      <div className="text-sm text-slate-800">{content}</div>
    </div>
  );
}
