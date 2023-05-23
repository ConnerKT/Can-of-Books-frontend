import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function BookCarousel(props) {
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
                            </Carousel.Caption>
                        </Carousel.Item>)

                    })

                    }
                </Carousel>

            </div>
        </div>
    )
}
