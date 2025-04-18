import React from "react";
import { IoStarHalf } from "react-icons/io5";
import { Link } from "react-router";

const Books = ({ book }) => {
  const {bookId, bookName, image, category, rating, author, tags, yearOfPublishing } =
    book;

  return (
    <Link to={`/singleBook/${bookId}`}>
      <div className="card bg-base-100 shadow-sm p-6">
        <figure className="py-10 bg-[#F3F3F3] rounded-2xl">
          <img className="w-[134px] h-[166px]" src={image} alt="Books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className=" text-[16px]">By : {author}</p>
          <div className="card-actions justify-end mt-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-outline bg-[#F3F3F3] border-none font-semibold px-4 text-green-600"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex mt-4 text-[18px]">
            <p>{category}</p>
            <p className="text-end flex items-center justify-end gap-1">
              {rating} <IoStarHalf />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
