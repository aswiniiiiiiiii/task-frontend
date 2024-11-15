import React from 'react'
import { Link } from 'react-router-dom'
import Land from '../assets/Landimg.png'

const Home = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center text-light' style={{height:'100vh',  background: 'linear-gradient(90deg, rgba(137,59,177,255),rgba(107,69,232,255)'}}>
        <div  style={{margin:'0 3rem'}}  className="row ">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h4>Task Management </h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus sed modi, tempore magni nobis cum ut eum. Ducimus nesciunt eligendi dicta. Obcaecati nobis facere eligendi? Quasi aperiam accusamus distinctio.
              Illum dolore nam perferendis, nisi eveniet quisquam ducimus earum, delectus, laboriosam maxime iste ipsam dolorem rem. Laboriosam incidunt nulla magni facilis adipisci ab totam quam earum rem nemo. Nisi, exercitationem?
              Facilis et impedit corrupti praesentium voluptates sunt aspernatur adipisci quas quis, delectus rerum excepturi nesciunt perferendis eum velit quo alias fugit reprehenderit! Mollitia non eligendi perspiciatis quod corrupti illo consequuntur.</p>
              <button className='btn btn-primary '><Link style={{textDecoration:'none',color:'white'}} to={'/login'}>Sign In</Link></button>
            </div>
            <div className="col-lg-6 ">
                <img width={'600px'} className='img-fluid' src={Land} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
