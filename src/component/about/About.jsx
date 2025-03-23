import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
            <div className="col-lg-6">
                <h1 className="text-primary fv-bold mb-4">About Us</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a quis maiores explicabo! Laborum <br></br>earum sunt ipsam voluptates provident saepe incidunt quo tenetur deserunt dolorem,<br /> quia, tempore culpa accusamus. Quam, aut possimus. Temporibus, quaerat nisi? Itaque inventore iure deserunt quasi omnis, necessitatibus <br /> aut voluptatum adipisci, officia <br />consequatur modi, eos laudantium?
                </p>
                <Link to= '../contact/contact.jsx' className=' btn btn-outline-primary px-3'>Contact Us</Link>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <img src="https://logo.com/image-cdn/images/kts928pd/production/a957c7eea4f98434a05252f7c964e192d3cd93be-620x385.png?w=1920&q=72&fm=webp" alt="About us" height={'400px'}  width={'400px'}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
