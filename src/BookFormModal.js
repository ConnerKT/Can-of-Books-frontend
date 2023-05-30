import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function BookFormModal(props) {

    function title(event) {
        props.setPost({ ...props.post, title: event.target.value });
    }

    function description(event) {
        props.setPost({ ...props.post, description: event.target.value });
    }

    function status(event) {
        props.setPost({ ...props.post, status: event.target.value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.postBooks();
        props.closeFunction(false);
        console.log(props.post)
    }

    return (
        <>
            <Modal show={props.show} onHide={props.closeFunction}>
                <Modal.Header closeButton>

                    <Modal.Title>Add a Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlid="title">
                            <Form.Label >Title</Form.Label>
                            <Form.Control controlid='titleControl' type="text" placeholder="Enter A Book Title.." onChange={title} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlid="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                controlid="descriptionControl"
                                type="text"
                                placeholder="Enter the Description..."
                                onChange={description}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlid="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Select onChange={status} controlid="statusSelect" aria-label="Default select example" >
                                <option value=" ">Choose a Status</option>
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeFunction}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BookFormModal;
