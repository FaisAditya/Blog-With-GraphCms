import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-gray-300 bg-opacity-30 shadow-lg rounded-lg transition duration-500 ease hover:-translate-y-3 hover:bg-white cursor-pointer p-8 mb-8 pb-12">
      <h3 className="text-xl text-center mb-8 font-semibold border-b pb-4 ">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer transition duration-300 hover:text-purple-800  block pb-3 mb-3 ">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

