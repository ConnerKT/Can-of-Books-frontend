import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormComp from "./FormComp";

function BookFormModal(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.closeFunction}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormComp
                        status={props.status}
                        description={props.description}
                        title={props.title}
                        setTitle={props.setTitle}
                        setDescription={props.setDescription}
                        setStatus={props.setStatus}
                        setPost={props.setPost}
                        post={props.post}
                        setSubmit={props.setSubmit}
                    />
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
