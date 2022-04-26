import React, { useEffect } from 'react'
import img1 from '../../img/testimonial/2.jpg'
import img2 from '../../img/testimonial/3.jpg'
import style from './Testimonial.module.css'


export default function Testimonial() 
{
  useEffect(() => {
    /* var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      wrap: false
    }) */

  }, [])
  
  return (
    <>
        <section id='testimonialDiv' className={`d-flex flex-column justify-content-center align-items-center py-5 px-4 `}>
            <h2 className={`h1 fw-bold mb-3`}>Client's Feedback</h2>
            <div className={`headerStyle mb-5`}></div>
            
            <div id="feedback" className="carousel slide w-100 mb-4 " data-bs-ride="carousel">
              <div className={`carousel-indicators mb-0`}>
                <button type="button" data-bs-target="#feedback" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#feedback" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className={`container`}>
                    <div className='row d-flex align-items-center justify-content-center'>
                      <div className={`${style.feedback} col-md-8 col-sm-10 px-3 py-4`}>
                        <div className={`${style.shape}`}></div>
                        
                        <div className={`row`}>
                          <div className={`col-md-3 d-flex justify-content-center align-items-center mb-3`}>
                            <img src={img1} alt="feedback picture" className={`img-fluid rounded-circle`}/>
                          </div>
                          <div className={`col-md-9 d-flex flex-column justify-content-center p-3`}>
                            <h6>Alex Ander</h6>
                            <p className='text-muted'><i className="fa-solid fa-location-dot"></i> United States</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi fugit labore repellat culpa aspernatur illo sed modi numquam ipsa.</p>
                            <span className='ms-3'>
                              <i className="fa-solid fa-star text-warning me-1"></i>
                              <i className="fa-solid fa-star text-warning me-1"></i>
                              <i className="fa-solid fa-star text-warning me-1"></i>
                              <i className="fa-solid fa-star text-warning me-1"></i>
                              <i className="fa-solid fa-star-half-stroke text-warning me-1"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="carousel-item">
                  <div className={`container`}>
                    <div className='row d-flex align-items-center justify-content-center'>
                      <div className={`${style.feedback} col-md-8 col-sm-10 px-3 py-4`}>
                        <div className={`${style.shape}`}></div>
                        
                        <div className={`row`}>
                          <div className={`col-md-3 d-flex justify-content-center align-items-center mb-3`}>
                            <img src={img2} alt="feedback picture" className={`img-fluid rounded-circle`}/>
                          </div>
                          <div className={`col-md-9 d-flex flex-column justify-content-center p-3`}>
                            <h6>Alex Ander</h6>
                            <p className='text-muted'><i className="fa-solid fa-location-dot"></i> United States</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi fugit labore repellat culpa aspernatur illo sed modi numquam ipsa.</p>
                            <span className='ms-3'>
                              <i className="fa-solid fa-star text-warning me-1"></i>
                              <i className="fa-solid fa-star text-warning me-1"></i>
                              <i className="fa-solid fa-star text-warning me-1"></i>
                              <i className="fa-solid fa-star text-warning me-1"></i>
                              <i className="fa-solid fa-star-half-stroke text-warning me-1"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 

            
              
            
        </section>
    </>
  )
}
