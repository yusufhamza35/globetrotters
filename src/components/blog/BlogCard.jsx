import React from "react";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import PulsingButton from "../others/PulsingButton";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";
import formatDate from "../../helpers/Date";

export default function BlogCard({ blog }) {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  return (
    <div className="blogCard flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md transition hover:shadow-lg">
      <div className="image rounded-md overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
        {blog.category}
      </div>

      <h1 className="title text-2xl font-bold text-gray-800">
        {blog.title}
      </h1>

      <div className="flex justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <span>{formatDate(blog.addedDate, language)}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{blog.views}</span>
        </div>
      </div>

      <p className="blogText text-gray-700 line-clamp-3">
        {blog.content}
      </p>

      <div className="w-fit mt-2">
        <PulsingButton href={`/blog/${blog.slug}`} text={t.blogReadMore} />
      </div>
    </div>
  );
}
