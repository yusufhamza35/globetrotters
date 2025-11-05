import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";
import blogList from "../../data/blogList";
import BlogCard from "./BlogCard";
import { useParams, useNavigate } from "react-router-dom";
import { FaBox, FaPen } from "react-icons/fa";

const slugify = (text) =>
  text.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/ç/g, "c")
  .replace(/ğ/g, "g").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u");

const deslugify = (slug, categoriesMap) =>
  Object.keys(categoriesMap).find(key => categoriesMap[key] === slug);

export default function Blogs() {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  const navigate = useNavigate();
  const { page = "1", category = "hepsi" } = useParams();

  const [currentPage, setCurrentPage] = useState(parseInt(page));
  const blogsPerPage = 2;

  const activeBlogs = blogList.filter((blog) => blog.active);

  const categoryLabels = Array.from(new Set(activeBlogs.map((blog) => blog.category)));
  const categoriesMap = { Hepsi: "hepsi" };
  categoryLabels.forEach(label => {
    categoriesMap[label] = slugify(label);
  });

  const selectedCategoryLabel = category === "hepsi"
    ? "Hepsi"
    : deslugify(category, categoriesMap);

  const filteredBlogs = selectedCategoryLabel === "Hepsi"
    ? activeBlogs
    : activeBlogs.filter((blog) => blog.category === selectedCategoryLabel);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    navigate(`/bloglar/${pageNum}/${category}`);
  };

  const handleCategoryChange = (label) => {
    const slug = categoriesMap[label];
    setCurrentPage(1);
    navigate(`/bloglar/1/${slug}`);
  };

  useEffect(() => {
    setCurrentPage(parseInt(page));
  }, [page]);

  return (
    <div className="flex flex-col lg:flex-row mt-6 p-4">
      <div className="flex-9">
        <h1 className="text-3xl font-bold mb-6 title flex items-center gap-3"><FaPen/> {t.blogTitle}</h1>
        <div className="blogs flex flex-col gap-5">
          {currentBlogs.map((blog, id) => (
            <BlogCard key={id} blog={blog} />
          ))}
          {currentBlogs.length === 0 && (
            <p className="text-gray-500">{t.noBlogsFound || "Blog bulunamadı."}</p>
          )}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
            <button
              key={pg}
              onClick={() => handlePageChange(pg)}
              className={`px-4 py-2 rounded cursor-pointer ${
                pg === currentPage
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {pg}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-3 lg:ml-10 mt-10 lg:mt-0">
        <h1 className="text-3xl font-bold mb-6 title flex items-center gap-3"><FaBox/> {t.blogCategory}</h1>
        <ul className="space-y-2">
          {Object.entries(categoriesMap).map(([label, slug]) => (
            <li key={slug}>
              <button
                onClick={() => handleCategoryChange(label)}
                className={`cursor-pointer transition-all block w-full text-left px-4 py-2 rounded ${
                  category === slug ? "bg-blue-600 text-white" : "hover:bg-gray-100 darkTitle"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
