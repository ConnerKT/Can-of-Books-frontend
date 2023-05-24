import React from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'
export default function FormComp(props) {
    function title(event) {
        props.setTitle(event.target.value)
    }
    function description(event){
        props.setDescription(event.target.value)
    }
    function status(event){
        props.setStatus(event.target.value)
    }
    function handleSubmit(event){
        props.setPost({
            title:props.title,
            description:props.description,
            status: props.status
        })
        props.setSubmit(true)

    }
  return (
      <div>
           <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label >Title</Form.Label>
              <Form.Control id='title' type="text" placeholder="Enter A Book Title.." onChange={title}/>
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
    </div>
  )
}
