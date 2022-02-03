import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);


  return (
    <div className="bg-gray-300 bg-opacity-30 shadow-lg rounded-lg p-8 mb-8 transition duration-500 ease hover:-translate-y-1 hover:bg-white ">
      <h3 className="text-xl text-center mb-8 font-semibold border-b pb-4 ">
        {slug ? "Related Post" : "Recent Post"}
      </h3>
      {relatedPosts.map((post) => (
        <div className="flex items-center w-full mb-4" key={post.title}>
          <div className="w-16 flex-none">
            <img
              className="align-middle rounded-full"
              src={post.featuredImage.url}
              alt={post.title}
              height="60px"
              width="60px"
            />
          </div>
          <div className="flex-grow ml-4 cursor-pointer hover:text-purple-800">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD,YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
