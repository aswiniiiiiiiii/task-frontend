import React from 'react'
import { Form, FloatingLabel, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginImg from '../assets/login.png'

const Auth = ({ insideRegister }) => {
    return (
        <>
            <div style={{ height: '100vh', background: 'linear-gradient(90deg, rgba(137,59,177,255),rgba(107,69,232,255)' }} className='d-flex justify-content-center align-items-center'>
                <div style={{ background: 'white' }} className="row rounded">
                    <div style={{ padding: '1rem' }} className="col-6 d-flex justify-content-center align-items-center">
                        <img width={'550px'} src={LoginImg} className='img-fluid' alt="" />
                    </div>
                    <div style={{ padding: '1rem' }} className="col-6">
                        <h2 className='text-center p-5'>Sign {insideRegister ? "up" : "in"} to your Account</h2>
                        <Form style={{ paddingBottom: '1rem' }}>

                            {
                                insideRegister &&
                                <FloatingLabel controlId="floatingInputName" label="Username" className="mb-3  "  >
                                    <Form.Control type="text" placeholder="username" />
                                </FloatingLabel>}


                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3"  >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>


                            {
                                insideRegister ?
                            <div className="mt-3 mb-2">
                                <button className='btn btn-primary mb-3'>Register</button>
                                <p>Already a User? Please Click here to <Link to={'/login'}>Login</Link></p>
                            </div>
                                :
                            <div className="mt-3">
                                <button className='btn btn-primary mb-3'>Login
                                    <Spinner className='ms-1 pt-2' animation="border" variant="light" />
                                </button>
                                <p>New User? Please click here to <Link to={'/register'}>Register</Link></p>

                            </div>
                            }

                        </Form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth
