import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import Books from '../Pages/Books/Books';

const Home = () => {
    const books = useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <div className='my-12'>
            <h1 className='text-center text-4xl'>Books</h1>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-28'>
           {
            books.map(book => <Books key={book.bookId} book={book}></Books>)
           }
           </div>
        </div>
    );
};

export default Home;