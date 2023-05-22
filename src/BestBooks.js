import React, { useState, useEffect } from 'react';
import axios from 'axios'
import BookCarousel from './BookCarousel';


function BestBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // TODO: Make a GET request to your API to fetch all the books from the database
        let url = 'http://localhost:3001/books'
        let response = axios.get(url)
            .then(res => {
                setBooks(res.data)
console.log(res)
            })
        // Update the books state with the fetched data
    }, []);

    // TODO: Render all the books in a Carousel

    return (
        <>
            <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

            {books.length !== 0 ? (
             
                    <BookCarousel books={books} />
           
            ) : (<div>
                <h3>No Books Found :(</h3 >
                <p>Book Carousel coming soon</p>
            </div>
            )
            }
        </>
    );
}

export default BestBooks;
