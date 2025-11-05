import React from "react";
import Textbox from "../others/Textbox";
import Textarea from "../others/Textarea";
import {
  FaEnvelope,
  FaPaperPlane,
  FaPen,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import translations from "../../languages/translations";
import { useSelector } from "react-redux";

export default function Contact() {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];
  return (
    <div className="flex flex-col md:flex-row p-4 justify-center items-center md:items-start">
      <div className="flex-1 p-2 max-w-xl w-full">
        <h2 className="text-gray-800 font-bold text-2xl mb-4 title">
          {t.contactTitle}
        </h2>
        <form className="flex flex-col gap-4">
          <Textbox icon={<FaUser />} placeholder={t.contactName} />
          <Textbox icon={<FaUser />} placeholder={t.contactSurName} />
          <Textbox
            icon={<FaEnvelope />}
            placeholder={t.contactMail}
            usage="email"
          />
          <Textarea placeholder={t.contactText} rows={5} icon={<FaPen />} />
          <button className="bg-blue-600 rounded-sm hover:bg-blue-500 px-4 py-2 text-white font-semibold text-lg flex items-center gap-2">
            <FaPaperPlane /> {t.contactSend}
          </button>
        </form>
      </div>

      <div className="flex-1 p-2 max-w-xl w-full mt-6 md:mt-0">
        <h2 className="text-gray-800 font-bold text-2xl mb-4 title">
          {t.contactInfo}
        </h2>
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full p-3 text-lg text-white bg-blue-600">
            <FaEnvelope />
          </span>
          <span className="text-gray-700 contactText">example@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full p-3 text-lg text-white bg-blue-600">
            <FaPhoneAlt />
          </span>
          <span className="text-gray-700 contactText">0555 555 55 55</span>
        </div>
      </div>
    </div>
  );
}
