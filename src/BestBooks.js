import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCarousel from "./BookCarousel";
import Button from 'react-bootstrap/Button';
import BookFormModal from "./BookFormModal";
import UpdateForm from "./UpdateForm";
import { useAuth0 } from "@auth0/auth0-react";

function BestBooks() {
    const { getAccessTokenSilently } = useAuth0();
    const [books, setBooks] = useState([]);
    // Setting the state for our Post, so we can get it from a form and send it to our backend
    const [post, setPost] = useState({
        title: '',
        description: '',
        status: '',

    })
    const [show, setShow] = useState(false);

    const [showUpdate, setShowUpdate] = useState(false);
    const [currentId, setCurrentId] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdateShow = () => setShowUpdate(true);
    //const handleUpdateClose = () => setShowUpdate(false);

    function formControl(event) {
        event.preventDefault();
        handleShow();
    }

    async function postBooks() {
        const token = await getAccessTokenSilently();

        try {
            let url = 'https://can-of-books-server-rfcy.onrender.com/books'
            let response = await axios.post(url, post, { headers: { authorization: `Bearer ${token}` } })
            // Handle the successful response here, if needed
            setBooks([...books, response.data])
            console.log(post)
            console.log('Post request successful:', books);

        } catch (error) {
            // Handle the error here
            console.error('Error while making post request:', error);
        }
    }

    useEffect(() => {
        async function fetchData() {

            try {
                const token = await getAccessTokenSilently();

                let url = "https://can-of-books-server-rfcy.onrender.com/books";

                axios.get(url, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    setBooks(res.data);
                }).catch((err) => {
                        console.error('Error fetching books:', err);
                    });
            } catch (err) {
                console.error('Error getting access token:', err);
            }
        }
        fetchData();
    }, [getAccessTokenSilently]);

    // TODO: Render all the books in a Carousel

    return (
        <>
            <h2 style={{ padding: '20px', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>My Book List</h2>

            {books.length !== 0 ? (
                <BookCarousel
                    currentId={currentId}
                    key={"BookCarousel"}
                    setCurrentId={setCurrentId}
                    showFunction={handleShow}
                    post={post}
                    setBooks={setBooks}
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
                    key={'BookFormModal'}
                    currentId={currentId}
                    postBooks={postBooks}
                    setPost={setPost}
                    post={post}
                    showFunction={handleShow}
                    show={show}
                    closeFunction={handleClose}
                />
                <UpdateForm
                    key={'UpdateForm'}
                    post={post}
                    currentId={currentId}
                    setShowUpdate={setShowUpdate}
                    setPost={setPost}
                    showFunction={handleUpdateShow}
                    showUpdate={showUpdate}
                    setBooks={setBooks}
                />
                <br></br>
                <Button style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', display: 'flex', justifyContent: 'center', margin: '0 auto' }} onClick={formControl} variant="outline-primary">Add Book!</Button>

            </div>
        </>
    );
}

export default BestBooks;
