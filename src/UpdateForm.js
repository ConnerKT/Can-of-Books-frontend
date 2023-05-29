import React from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap';
import axios from 'axios';
export default function UpdateForm(props) {
    
    function title(event) {
        props.setTitle(event.target.value);
        handleSubmit(); // Call handleSubmit after updating the state
    }

    function description(event) {
        props.setDescription(event.target.value);
        handleSubmit(); // Call handleSubmit after updating the state
    }

    function status(event) {
        props.setStatus(event.target.value);
        handleSubmit(); // Call handleSubmit after updating the state
    }

    function handleSubmit(event) {
        props.setPost({
            title: props.title,
            description: props.description,
            status: props.status
        })

        //console.log(props.post)

    }

    async function editButton(id) {
        await axios.put(`http://localhost:3001/books/${id}`, props.post)
            .then(res => {
                props.setBooks(res.data)
                console.log("PUT response", res)
            })
        props.handleClose(false)
    }
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} animation={true}>
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

                        <Button onClick={() => editButton(props.currentId)} variant="primary" >
                            Submit
                        </Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

