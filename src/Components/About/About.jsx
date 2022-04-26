import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    <>
        <section id='aboutDiv'  className='container py-5'>
            <div className='row'>
                <div className={`${style.aboutPicture} col-md-6 pt-5 px-5`}>
                    <div className={style.aboutPic} >
                        <div className={`${style.picBorder} w-100 h-100`}></div>
                        
                        <div className={`${style.picLayout} w-100 h-100 d-flex justify-content-center align-items-center`}>
                            <a href='https://www.facebook.com/' target='_blank' ><i className="fa-brands fa-facebook-f m-2"></i></a>
                            <a href='https://twitter.com/' target='_blank' ><i className="fa-brands fa-twitter m-2"></i></a>
                            <a href='https://www.google.com/' target='_blank' ><i className="fa-brands fa-google m-2"></i></a>
                            <a href='https://github.com/' target='_blank' ><i className="fa-brands fa-github m-2"></i></a>
                        </div>
                    </div>
                </div> 

                <div className={`${style.aboutInfo} col-md-6 py-5`}>
                    <h2 className='h3 mb-3 ms-2'> <span style={{color: '#ff305b'}}>I</span> HELLO, </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className='row px-1 mb-3'>
                        <div className='col-6 pe-0'>
                            <label >Name: <span className='fw-light'>Rdam smith </span></label> <br />
                            <label>Age: <span className='fw-light'>26 Year</span></label> <br />
                            <label>Freelance: <span className='fw-light'>Available </span></label>
                        </div>
                        <div className='col-6 p-0'>
                            <label>Job Title: <span className='fw-light'>UI/UX Designer </span></label> <br />
                            <label>Location: <span className='fw-light'>United States </span></label> <br />
                            <label>E-mail: <span className='fw-light'>Rsmith@gmail.com </span></label>
                        </div>
                    </div>
                    <button className="btn text-light me-3 px-3" >Download CV  <i className="fa-solid fa-download"></i> </button>
                    <button className="btn text-light mx-3 px-3" >Hire Me  <i className="fa-solid fa-paper-plane"></i> </button>
                </div>

            </div>
        </section>
    </>
  )
}
