import React from 'react'

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Have some questions?</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-5 d-flex justity-content-center">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/apple_ar.jpg?size=690:388" alt="" height={'300px'} width={'300px'} />
            </div>
            <div className="col-md-6">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="">Full Name</label>
                        <input type="text" className='form-control' placeholder='Rahmon' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Email Address</label>
                        <input type="email" className='form-control' placeholder='@gmail.com' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Massage</label>
                        <textarea name="" id="" className='form-control' placeholder='Write your massage'></textarea>
                    </div>
                    <button type='submit' className="btn btn-outline-primary">Send Massage</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
