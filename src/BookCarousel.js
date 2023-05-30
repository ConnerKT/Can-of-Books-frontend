import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function BookCarousel(props) {
    //let currentId =''
    async function deleteButton(id) {
        await axios.delete(`http://localhost:3001/books/${id}`)
            .then(res => {
                console.log("Delete response", res)
                props.setBooks(res.data)
        })

    }

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '600px' }}>

                <Carousel fade >
                    {props.books.map(element => {
                        return (
                            <Carousel.Item>
                                <img
                                    src={`https://innovating.capital/wp-content/uploads/2021/05/placeholder-image-dark.jpg`}
                                    alt={element.title}
                                />
                                <Carousel.Caption style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                                    <h3>{element.title}</h3>
                                    <p>{element.description}</p>
                                    <p>{element.status}</p>
                                    <Button style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}onClick={() => { deleteButton(element._id) }} variant="outline-danger">Delete This Book</Button>
                                    <Button style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}onClick={(e) => {
                                        e.preventDefault()
                                        props.setCurrentId(element._id)
                                        console.log(props.currentId)
                                        props.handleUpdateShow()

                                    }}  variant="outline-secondary">Edit this Book</Button>
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
