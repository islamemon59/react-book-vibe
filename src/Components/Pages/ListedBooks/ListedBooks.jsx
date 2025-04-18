import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadListBooksId } from "../../../Utilities/StoreBooks";
import ListedBook from "../ListedBook/ListedBook";
import { getWishListBooks } from "../../../Utilities/WishListBooks";
import WishlistBook from "../WishlistBook/WishlistBook";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBook, setReadBook] = useState([]);
  console.log(readBook);
  const [wishlistBook, setWishlistBook] = useState([])

  useEffect(() => {
    const storedId = getReadListBooksId();
    const convertedId = storedId.map((id) => parseInt(id));

    const readList = books.filter((book) => convertedId.includes(book.bookId));
    setReadBook(readList);
  }, [books]);

  useEffect(()=> {
    const wishlistBooks = getWishListBooks()
    const wishlistBooksId = wishlistBooks.map(id => parseInt(id))
    const wishListBooks = books.filter(book => wishlistBooksId.includes(book.bookId))
    setWishlistBook(wishListBooks) 
  }, [books])

  return (
    <div>
      <div className="text-center p-6 bg-[#F3F3F3] rounded-2xl my-5">
        <h1 className="text-[28px] font-bold">Books</h1>
      </div>
      <div className="text-center p-6">
        <button className="btn bg-green-600 text-white">Sort By </button>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readBook.map((book) => (
              <ListedBook key={book.bookId} book={book}></ListedBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div>
            {wishlistBook.map((book) => (
              <WishlistBook key={book.bookId} book={book}></WishlistBook>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
