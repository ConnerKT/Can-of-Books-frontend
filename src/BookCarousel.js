import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function BookCarousel(props) {
    //let currentId =''
    async function deleteButton(id) {
        await axios.delete(`http://localhost:3001/books/${id}`)
        window.location.reload()
    }

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '600px' }}>

                <Carousel fade>
                    {props.books.map(element => {
                        return (
                            <Carousel.Item>
                                <img
                                    src={`https://dummyimage.com/600`}
                                    alt={element.title}
                                />
                                <Carousel.Caption>
                                    <h3>{element.title}</h3>
                                    <p>{element.description}</p>
                                    <p>{element.status}</p>
                                    <Button onClick={() => { deleteButton(element._id) }} type="submit" variant="outline-danger">Delete This Book</Button>
                                    <Button onClick={(e) => {
                                        e.preventDefault()
                                        props.setCurrentId(element._id)
                                        props.handleUpdateShow()

                                    }} type="submit" variant="outline-secondary">Edit this Book</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                    }
                </Carousel>
            </div>
        </div>
    )
}
