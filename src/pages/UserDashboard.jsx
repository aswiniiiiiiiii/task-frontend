import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
Link
const UserDashboard = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>

            <div className="d-flex justify-content-center align-items-center ">
                <div style={{ width: '400px' }} className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda dolorem architecto quo explicabo est doloremque deserunt ullam ad iure repellendus deleniti, voluptate totam, placeat accusamus sit possimus vitae cum!
                </div>
                <div style={{ width: '1100px' }} className=" d-flex flex-column">
                    <div style={{ height: '300px', background: 'linear-gradient(90deg, rgba(137,59,177,255),rgba(107,69,232,255)' }} >
                        <h2 style={{ paddingTop: '6rem' }} className='text-light mx-5'>Welcome User</h2>
                       
                    </div>
                    <div>
                        <div className=' d-flex justify-content-start  my-3 '>
                            <button  className='btn btn-primary px-2'><Link style={{textDecoration:'none',color:'white'}} to={'/taskform'}>Add Task</Link></button>
                        </div>
                       
                        <ul style={{ listStyle: 'none' }}>
                            <li className='border shadow py-2 my-2 d-flex justify-content-between'>
                                task
                                <div className='me-4'>
                                    <i className="fa-solid fa-edit me-2 "></i>
                                    <i className="fa-solid fa-trash"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default UserDashboard
