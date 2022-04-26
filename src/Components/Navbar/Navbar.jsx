import React from 'react'


export default function Navbar() 
{
    
  return (
    <>
        <nav className='navbar navbar-expand-md fixed-top p-0' id='navbar'>
            <div className='container-fluid '>
                <a href='#homeDiv' className='fs-5 fw-bold ms-3' style={{color:'#ff305b'}} >Fokir</a>
                <button type='button' className='navbar-toggle btn bg-transparent text-light fs-3 shadow-none' data-bs-toggle="collapse" data-bs-target="#toggleNavbar" aria-controls="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse " id="toggleNavbar">
                    <ul className='navList list-unstyled  d-flex align-items-center justify-content-center ms-auto mt-3 '>
                        <li className='me-2 ps-1'> <a href='#homeDiv'>Home</a> </li>
                        <li className='me-2 ps-1'> <a href='#aboutDiv'>About</a> </li>
                        <li className='me-2 ps-1'> <a href='#servicesDiv'>Services</a> </li>
                        <li className='me-2 ps-1'> <a href='#porfolioDiv'>Portfolio</a> </li>
                        <li className='me-2 ps-1'> <a href='#testimonialDiv'>Testimonial</a> </li>
                        <li className='me-2 ps-1'> <a href='#blogDiv'>Blog</a> </li>
                        <li className='me-2 ps-1'> <a href='#contactDiv'>Contact</a> </li>
                    </ul>
                </div>
                
                
            </div>
        </nav>
    </>
  )
}
