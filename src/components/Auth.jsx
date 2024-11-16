import React, { useState } from 'react'
import { Form, FloatingLabel, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../assets/login.png'
import { loginAPI, registerAPI } from '../services/allAPI'

const Auth = ({ insideRegister }) => {
    const navigate = useNavigate()
    const [inputData,setInputData] = useState({username:"",email:"",password:""})
    console.log(inputData);
    
    const handleRegsiter = async(e)=>{
        e.preventDefault()
        console.log("inside handleRegsiter");
        if(inputData.username && inputData.email && inputData.password){
            // alert("Make api call")
            try{
                const result = await registerAPI(inputData)
                console.log(result);
                if(result.status==200){
                    alert("Successfully Registered..")
                    navigate('/login')
                    setInputData({username:'',email:'',password:''})
                }else{
                    if(result.response.status==406){
                        alert(result.response.data)
                        setInputData({username:'',email:'',password:''})

                    }
                }
                
            }catch(err){
                console.log(err);
                
            }
        }else{
            alert("Please fill the form completely!!")
        }
        
    }
    const handleLogin = async(e)=>{
        e.preventDefault()
        if(inputData.email && inputData.password){
            try{
                const result = await loginAPI(inputData)
                if(result.status==200){
                    sessionStorage.setItem("user",JSON.stringify(result.data.user))
                    sessionStorage.setItem('token',result.data.token)
                    setInputData({user:'',email:"",password:""})
                    navigate('/userdashboard')
                }else{
                    if(result.response==404){
                        alert(result.response.data)
                    }
                }
            }catch(err){
                console.log(err);
                
            }
        }else{
            alert("Please fill the form Completely..")
        }
    }
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
                                    <Form.Control value={inputData.username}  onChange={e=>setInputData({...inputData,username:e.target.value})} type="text" placeholder="username" />
                                </FloatingLabel>
                            }


                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3"  >
                                <Form.Control value={inputData.email} onChange={e=>setInputData({...inputData,email:e.target.value})} type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control value={inputData.password} onChange={e=>setInputData({...inputData,password:e.target.value})} type="password" placeholder="Password" />
                            </FloatingLabel>


                            {
                                insideRegister ?
                            <div className="mt-3 mb-2">
                                <button onClick={handleRegsiter} className='btn btn-primary mb-3'>Register</button>
                                <p>Already a User? Please Click here to <Link to={'/login'}>Login</Link></p>
                            </div>
                                :
                            <div className="mt-3">
                                <button onClick={handleLogin} className='btn btn-primary mb-3'>Login
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
