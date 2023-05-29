import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function BookFormModal(props) {

    function handleSubmit() {
        props.setPost({
            title: props.title,
            description: props.description,
            status: props.status
        })
        
        //props.setSubmit(true)

    }

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
        console.log("status", props.status)
    }



    return (
        <>
            <Modal show={props.show} onHide={props.closeFunction}>
                <Modal.Header closeButton>

                    <Modal.Title>Add a Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
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
                        <Button onClick={() => { props.postBooks(); props.closeFunction() }} variant="primary" >
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
