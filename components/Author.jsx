import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg from-gray-300 bg-gradient-to-br bg-opacity-20 shadow-lg transition duration-500 ease hover:-translate-y-1 hover:bg-white ">
      <div className="absolute left-0 right-0 -top-14">
        <Image className="align-middle rounded-full" unoptimized
          src={author.photo.url} alt={author.name} height="100px" width="100px" />
      </div>
      <h3 className="text-black text-xl my-4 font-bold">{author.name}</h3>
      <p className="text-black text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
