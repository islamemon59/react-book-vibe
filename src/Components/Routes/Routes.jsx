import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Home/Home";
import SingleBook from "../Pages/SingleBook/SingleBook";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                loader: () => fetch('./BooksData.json'),
                Component: Home
            },
            {
                path: '/singleBook/:bookId',
                loader: () => fetch('./BooksData.json'),
                Component: SingleBook
            },
            {
                path: 'listedBooks',
                loader: () => fetch('./BooksData.json'),
                Component: ListedBooks
            }
        ]
    }
])