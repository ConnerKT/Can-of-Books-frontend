import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCarousel from "./BookCarousel";
import Button from 'react-bootstrap/Button';
import BookFormModal from "./BookFormModal";
import UpdateForm from "./UpdateForm";

function BestBooks() {
    const [books, setBooks] = useState([]);
    // Setting the state for our Post, so we can get it from a form and send it to our backend
    const [submit, setSubmit] = useState(false)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    
    const [post, setPost] = useState({
        title: title,
        description: description,
        status: status
    })


    const [show, setShow] = useState(false);
    
    const [showUpdate, setShowUpdate] = useState(false);
    const [currentId, setCurrentId] = useState('')
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleUpdateShow = () => setShowUpdate(true);
    const handleUpdateClose = () => setShowUpdate(false);
    
    

    function formControl(event) {
        event.preventDefault();
        handleShow();
    }

    // if (submit === true) {
    //     postBooks();
    //     setSubmit(false)
    // }

    function postBooks(event) {
        //event.preventDefault()
        axios.post('http://localhost:3001/books', post)
            .then((response) => {
                // Handle the successful response here, if needed
                
                console.log('Post request successful:', response);
            })
            .catch((error) => {
                // Handle the error here
                console.error('Error while making post request:', error);
            });
    }

    useEffect(() => {
        // TODO: Make a GET request to your API to fetch all the books from the database
        let url = "http://localhost:3001/books";
        let response = axios.get(url).then((res) => {
            setBooks(res.data);
            console.log(res.data);
        });

        // Update the books state with the fetched data
    }, []);

    // TODO: Render all the books in a Carousel

    return (
        <>
            <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

            {books.length !== 0 ? (
                <BookCarousel
                    setCurrentId={setCurrentId}
                    showFunction={handleShow}
                    post={post}
                    setPost={setPost}
                    handleUpdateShow={handleUpdateShow}
                    books={books}
                />
            ) : (

                <div>
                    <h3>No Books Found :(</h3>
                    <p>Book Carousel coming soon</p>
                </div>

            )}
            <div>
                <BookFormModal
                    postBooks={postBooks}
                    setSubmit={setSubmit}
                    submit={submit}
                    title={title}
                    description={description}
                    status={status}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setStatus={setStatus}
                    setPost={setPost}
                    post={post}
                    showFunction={handleShow}
                    show={show}
                    closeFunction={handleClose}
                />
                <UpdateForm
                    post={post}
                    currentId={currentId}
                    handleClose={handleUpdateClose}
                    setSubmit={setSubmit}
                    title={title}
                    description={description}
                    status={status}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setStatus={setStatus}
                    setPost={setPost}
                    showFunction={handleUpdateShow}
                    show={showUpdate}
                />
                <Button onClick={formControl} variant="outline-primary">Add Book!</Button>{' '}
            </div>
        </>
    );
}

export default BestBooks;
