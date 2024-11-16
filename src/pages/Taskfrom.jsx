import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { addtaskAPI, updateTaskAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Taskfrom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    heading: '',
    description: '',
    startDate: '',
    endDate: '',
    status: '',
    progress: 0,
    remainder: '',
  });
  // const navigate = useNavigate()
  // const [formDetails,setFormDetails] = useState({heading:"",description:"",startDate:"",endDate:"",status:"",progress:0,remainder:""})
  // console.log(formDetails);

  // const addTask = async () => {
  //   if (formDetails.heading && formDetails.description && formDetails.startDate && formDetails.status && formDetails.endDate) {
  //     const token = sessionStorage.getItem('token');
  //     if (token) {
  //       const reqHeader = {
  //         "Authorization": `Bearer ${token}`,
  //       };

  //       const reqBody = {
  //         heading: formDetails.heading,
  //         description: formDetails.description,
  //         startDate: formDetails.startDate,
  //         endDate: formDetails.endDate,
  //         status: formDetails.status,
  //       };

  //       try {
  //         const result = await addtaskAPI(reqBody, reqHeader);
  //         if (result.status === 200) {
  //           alert('Task added successfully!!');
  //           setFormDetails({
  //             heading: '',
  //             description: '',
  //             startDate: '',
  //             endDate: '',
  //             status: '',
  //             progress: 0,
  //             remainder: '',

  //           });
  //           navigate('/userdashboard')
  //         } else {
  //           alert(result.response.data);
  //         }
  //       } catch (err) {
  //         console.log(err);
  //         alert('Error adding task');
  //       }
  //     }
  //   } else {
  //     alert('Please fill the form completely');
  //   }
  // };
  useEffect(() => {
    if (location.state?.task) {
      setFormDetails(location.state.task); // Prefill form with task data
    }
  }, [location.state]);

  const addOrUpdateTask = async () => {
    const token = sessionStorage.getItem('token');
    const reqHeader = { Authorization: `Bearer ${token}` };

    if (formDetails.heading && formDetails.description && formDetails.startDate && formDetails.endDate && formDetails.status) {
      try {
        if (location.state?.task) {
          // Update Task
          const result = await updateTaskAPI(location.state.task._id, formDetails, reqHeader);
          if (result.status === 200) {
            alert('Task updated successfully!');
          }
        } else {
          // Add Task
          const result = await addtaskAPI(formDetails, reqHeader);
          if (result.status === 200) {
            alert('Task added successfully!');
          }
        }
        navigate('/userdashboard');
      } catch (err) {
        console.error(err);
        alert('Error saving task.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };
  return (
    <div style={{ height: '100vh', background: 'linear-gradient(90deg, rgba(137,59,177,255),rgba(107,69,232,255)' }} className='d-flex justify-content-center align-items-center'>
      <div style={{ width: "600px", margin: '3rem 0' }} className='bg-light rounded '>
        <h2 className='m-5'>Fill the Task Details</h2>
        <div>
          <Form className='mx-5'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Heading</Form.Label>
              <Form.Control value={formDetails.heading} onChange={(e) => { setFormDetails({ ...formDetails, heading: e.target.value }) }} type="text" placeholder="Heading" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Task Description</Form.Label>
              <Form.Control value={formDetails.description} onChange={(e) => { setFormDetails({ ...formDetails, description: e.target.value }) }} type="text" placeholder="Task Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Start Date</Form.Label>
              <Form.Control value={formDetails.startDate} type="date" onChange={(e) => { setFormDetails({ ...formDetails, startDate: e.target.value }) }} placeholder="StartDate" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>End Date</Form.Label>
              <Form.Control value={formDetails.endDate} onChange={(e) => { setFormDetails({ ...formDetails, endDate: e.target.value }) }} type="date" placeholder="EndDate" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Status</Form.Label>
              <select
                value={formDetails.status}
                onChange={e => setFormDetails({ ...formDetails, status: e.target.value })}
              >
                <option value="Progress">Progress</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task Progress</Form.Label>
        <Form.Control value={formDetails.progress} onChange={(e)=>{setFormDetails({...formDetails,progress:e.target.value})}} type="text" placeholder="Progress" />
      </Form.Group> */}
          </Form>
          <button onClick={addOrUpdateTask} className="mx-3 mb-5 btn btn-primary">
            {location.state?.task ? 'Update Task' : 'Add Task'}
          </button>        </div>
      </div>
    </div>
  )
}

export default Taskfrom
