import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function BookCarousel(props) {
    let currentId =''
    async function deleteButton () {
        await axios.delete(`http://localhost:3001/books/${currentId}`)
        window.location.reload()
    }
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '600px' }}>
                
                <Carousel fade>
                    {props.books.map(element => {
                        return (<Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={`https://fakeimg.pl/600x600?text=${element.title}`}
                                alt={element.title}
                            />
                            <Carousel.Caption>
                                <h3>{element.title}</h3>
                                <p>{element.description}</p>
                                <p>{element.status}</p>
                                {currentId=element._id}
                                <Button onClick={deleteButton} type="submit" variant="outline-danger">Delete This Book</Button>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    })
                    }
                </Carousel>
            </div>
        </div>
    )
}
