import React from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap';
import axios from 'axios';

export default function UpdateForm(props) {
    
    function title(event) {
        props.setPost({ ...props.post, title: event.target.value });
    }

    function description(event) {
        props.setPost({ ...props.post, description: event.target.value });
    }

    function status(event) {
        props.setPost({ ...props.post, status: event.target.value });
    }
    async function handleSubmit(event) {
        event.preventDefault()

        try {
            let response = await axios.put(`http://localhost:3001/books/${props.currentId}`, props.post)

            props.setBooks(response.data)
            console.log("PUT response", response.data)
        }
        catch (error) {
            console.log(error)
        }

        props.setShowUpdate(false);
    }

    return (
        <div>
            <Modal show={props.showUpdate} onHide={props.handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit A Book!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label >Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter A Book Title.." onChange={title} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the Description..."
                                onChange={description}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={status}>
                                <option>Choose a Status</option>
                                <option value="Completed">Completed</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Hiatus">Hiatus</option>
                                <option value="Discontinued">Discontinued</option>
                                <option value="Draft">Draft</option>
                                <option value="Published">Published</option>
                                <option value="Unpublished">Unpublished</option>
                                <option value="Banned">Banned</option>

                            </Form.Select>
                        </Form.Group>

                        <Button type="submit" variant="primary" >
                            Submit
                        </Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

