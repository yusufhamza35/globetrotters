import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogList from "../../data/blogList";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaEye,
  FaHome,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";
import PulsingButton from "../others/PulsingButton";
import formatDate from "../../helpers/Date";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  const blog = blogList.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="flex items-center justify-center bg-slate-200 min-h-[80vh] errorPage">
        <div className="text-center flex flex-col gap-2 justify-center items-center p-8 rounded-xl bg-slate-100 notPage">
          <h1 className="text-4xl font-bold errorText flex items-center justify-center gap-3">
            <FaExclamationTriangle /> {t.notFound}
          </h1>
          <h1 className="text-lg font-bold errorText mb-4">{t.blogNotFound}</h1>
          <PulsingButton icon={<FaHome />} href="/" text={t.goHome} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-xl shadow-md hover:shadow-xl mt-5">
      <div className="flex justify-between items-center p-4">
        <button
          onClick={() => navigate("/bloglar")}
          className="cursor-pointer flex items-center gap-2 text-blue-600 hover:underline"
        >
          <FaArrowLeft /> Geri Dön
        </button>

        <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          {blog.category}
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-2 title">{blog.title}</h1>
      <div className="flex justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-2 my-6">
          <FaCalendarAlt />
          <span>{formatDate(blog.addedDate, language)}</span>
        </div>
        <div className="flex items-center gap-2 text-blue-400">
          <FaEye />
          <span>{blog.views}</span>
        </div>
      </div>
      <img src={blog.image} alt={blog.title} className="w-full rounded mb-6" />
      <p className="text-lg blogText">{blog.content}</p>
    </div>
  );
}
