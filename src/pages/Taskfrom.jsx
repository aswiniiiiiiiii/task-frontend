import React from 'react'
import Form from 'react-bootstrap/Form';

const Taskfrom = () => {
  return (
    <div style={{height:'100vh', background: 'linear-gradient(90deg, rgba(137,59,177,255),rgba(107,69,232,255)'}} className='d-flex justify-content-center align-items-center'>
      <div style={{width:"600px",margin:'3rem 0'}} className='bg-light rounded '>
      <h2 className='m-5'>Fill the Task Details</h2>
        <div>
        <Form className='mx-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task Heading</Form.Label>
        <Form.Control type="text" placeholder="Heading" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Heading" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="text" placeholder="Heading" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>End Date</Form.Label>
        <Form.Control type="text" placeholder="Heading" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task Status</Form.Label>
        <Form.Control type="text" placeholder="Heading" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task Progress</Form.Label>
        <Form.Control type="text" placeholder="Heading" />
      </Form.Group>
    </Form>
        <button className='mx-3 mb-5 btn btn-primary'>Add Task</button>
        </div>
      </div>
    </div>
  )
}

export default Taskfrom
