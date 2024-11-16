import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteTaskAPI, getAllTaskAPI, updateTaskAPI } from '../services/allAPI';
Link
const UserDashboard = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [alltask, setAlltask] = useState("")
    useEffect(() => {
        getAllTask()
        if (sessionStorage.getItem("user")) {
            setUsername(JSON.parse(sessionStorage.getItem("user")).username)

        } else {
            setUsername("")
        }
    }, [])


    const getAllTask = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`,
            };
            try {
                const result = await getAllTaskAPI(reqHeader)
                console.log(result);

                if (result.status == 200) {
                    setAlltask(result.data)
                }
            } catch (err) {
                console.log(err);

            }
        }
    }
    console.log(alltask);

    const deleteTask = async (id) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            //api call
            const reqHeader = {
                "Authorization": `Bearer ${token}`,
            };
            try {
                await deleteTaskAPI(id,reqHeader)
                getAllTask()
            } catch (err) {
                console.log(err);

            }
        }
    }

    const handleEditTask = (task) => {
        navigate('/taskform', { state: { task } }); // Navigate with task data
    };
    const formatDate = (dateString) => {
        if (!dateString) return "N/A"; // Handle empty date
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        }).format(date);
    };
    


return (
    <>

        <div className="d-flex justify-content-center align-items-center ">
            {/* <div style={{ width: '400px' }} className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda dolorem architecto quo explicabo est doloremque deserunt ullam ad iure repellendus deleniti, voluptate totam, placeat accusamus sit possimus vitae cum!
                </div> */}
            <div style={{ width: '100%', padding: '0 4rem' }} className=" d-flex flex-column">
                <div className='' style={{ height: '200px', background: 'linear-gradient(90deg, rgba(137,59,177,255),rgba(107,69,232,255)' }} >
                    <h1 style={{ paddingTop: '6rem' }} className='text-light mx-5'>Welcome, {username} </h1>
                    <div className='d-flex justify-content-end pe-3'><button className='btn btn-primary '><Link style={{textDecoration:'none',color:'white'}} to={'/'}>Logout</Link></button></div>
                </div>
                <div>
                    <div className=' d-flex justify-content-start  my-3 '>
                        <button className='btn btn-primary px-2'><Link style={{ textDecoration: 'none', color: 'white' }} to={'/taskform'}>Add Task</Link></button>
                    </div>

                    <ul style={{ listStyle: 'none' }}>
                        {
                            alltask?.length > 0 ?
                                alltask.map(task => (
                                    <li className='border shadow py-2 my-2 d-flex justify-content-between' key={task?._id}>
                                        <div className='p-3'>
                                            <h3>{task?.heading}</h3>
                                            <p className='fs-5'>{task?.description}</p>
                                            <div className='d-flex justify-content-start '>
                                                <div>
                                                    <span className='text-primary'>Created</span>: {formatDate(task?.startDate)}
                                                </div>
                                                <div className='ms-5'>
                                                    <span className='text-danger'>End Date</span>: {formatDate(task?.endDate)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='me-4 d-flex fs-5 gap-3'>
                                            <div style={{ cursor: 'pointer' ,color:'green'}} onClick={() => handleEditTask(task)}>
                                                <i className="fa-solid fa-edit me-2"></i>
                                            </div>
                                            <div style={{ cursor: 'pointer',color:'red' }} onClick={() => deleteTask(task?._id)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </div>
                                        </div>
                                    </li>
                                ))
                                :
                                <div className="text-danger text-center fas-4">No Task Added</div>
                        }
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
