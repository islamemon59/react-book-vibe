import React from "react";
import { useLoaderData, useParams } from "react-router";
import { setReadBooksId } from "../../../Utilities/StoreBooks";
import { setWishListBooksId } from "../../../Utilities/WishListBooks";

const SingleBook = () => {
  const { bookId } = useParams();
  const convertedId = parseInt(bookId);
  const books = useLoaderData();
  console.log(books);
  const book = books.find((book) => book.bookId === convertedId);
  console.log(book);
  const {
    image,
    bookName,
    author,
    publisher,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
    review,
    category,
  } = book;


  const handleRead = (id) => {

    setReadBooksId(id)
  }

  const handleWishList = (id) => {
    setWishListBooksId(id)
  }

  return (
    <div className="flex gap-10 h-[800px] my-10">
      <div className="w-[50%] p-20 bg-[#F3F3F3] rounded-2xl">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={image}
          alt=""
        />
      </div>
      <div className="w-[50%] px-10 ">
        <h1 className="text-[40px] font-bold">{bookName}</h1>
        <h2 className="text-xl font-medium border-b-2 border-[#F3F3F3] py-4">
          By : {author}
        </h2>
        <h3 className="text-xl font-medium border-b-2 border-[#F3F3F3] py-4">
          {category}
        </h3>
        <p className="py-5">
          <span className="font-bold">Review : </span>
          {review}
        </p>
        <div className="flex items-center border-b-2 border-[#F3F3F3] py-5">
          <span className="font-bold">Tag</span>
          {tags.map((tag, index) => (
            <p className="ml-6 px-4 py-1 bg-[#F3F3F3] rounded-3xl font-medium text-green-600" key={index}>#{tag}</p>
          ))}
        </div>
        <div className="flex items-center gap-20 py-5">
          <div className="space-y-4">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="space-y-4 font-semibold">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="mt-6">
            <button onClick={() => handleRead(bookId)} className="btn text-[18px] rounded-md">Read</button>
            <button onClick={() => handleWishList(bookId)} className="btn ml-4 text-[18px] text-white bg-cyan-500 rounded-md">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
