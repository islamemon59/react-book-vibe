import React from "react";


const Banner = () => {
  return (
    <div className="hero bg-base-200 py-14">
      <div className="hero-content flex-col lg:flex-row-reverse gap-36">
        <img
          src="books.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold leading-18"><span>Books to freshen up</span> <br /> <span>your bookshelf</span></h1>
          <button className="btn bg-green-600 text-white mt-10">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
