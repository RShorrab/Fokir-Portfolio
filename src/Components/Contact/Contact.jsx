import React from 'react'

export default function Contact() {
  return (
    <>
        <section id='contactDiv' className={`d-flex flex-column justify-content-center align-items-center p-5`}>
          <h2 className={`h1 fw-bold mb-3`}>Contact Us</h2>
          <div className={`headerStyle mb-5`}></div>

          <div className='container' style={{maxWidth: '800px'}}>
            <form>
              <div className='row'>
                <div className='col-md-6 mb-3'> <input type="text" className={`form-control shadow-none`} placeholder='Name'/> </div>
                <div className='col-md-6 mb-3'> <input type="email" className={`form-control shadow-none`} placeholder='Email'/> </div>
              </div>
              <div className='row mb-3'> 
                <div className='col-12'> <input type="text" className={`form-control shadow-none`} placeholder='Subject'/> </div>
              </div>
              <div className='row mb-4'> 
                <div className='col-12'> <textarea name="message" cols="30" rows="5" placeholder='Message for me' className='form-control shadow-none'></textarea> </div>
              </div>

              <button className="btn text-light px-2 disabled">SEND MESSAGE</button>
            </form>
          </div>
        </section>
    </>
  )
}
