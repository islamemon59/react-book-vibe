import React from 'react';
import { IoStarHalf } from "react-icons/io5";

const wishlistBook = ({book}) => {
    const { bookName, image, category, rating, author, tags, yearOfPublishing } =
    book;

  return (
      <div className="card bg-base-100 p-6 md:flex-row flex-col border-2 border-[#F3F3F3] my-8 ">
        <figure className="p-10 bg-[#F3F3F3] rounded-2xl">
          <img className="w-[134px] h-[166px] object-cover" src={image} alt="Books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className=" text-[16px]">By : {author}</p>
          <div className="card-actions justify-stat">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-outline bg-[#F3F3F3] border-none font-semibold px-4 text-green-600"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex justify- mt-4 text-[18px]">
            <p>{category}</p>
            <p className=" flex items-center justify-start gap-1">
              {rating} <IoStarHalf />
            </p>
          </div>
        </div>
      </div>

  );
};

export default wishlistBook;