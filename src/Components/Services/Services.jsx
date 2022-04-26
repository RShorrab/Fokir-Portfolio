import React from 'react'
import style from './Services.module.css';
export default function Services() {
  return (
    <>
      <section id='servicesDiv' className={`${style.services} p-5 d-flex flex-column align-items-center`}>
        <h2 className={`h1 fw-bold mb-3`}>Our Services</h2>
        <div className={`headerStyle`}></div>
        <div className={`container mt-5`}>
          <div className={`row`}>
            <div className={`${style.serviseDiv} col-lg-3 col-md-6 d-flex flex-column justify-content-center align-items-center py-5 text-center`}>
              <i className="fa-solid fa-wand-magic-sparkles mb-4 fs-3"></i>
              <h4 >UI/UX DESIGN</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis necstatibus.</p>
            </div>
            <div className={`${style.serviseDiv} col-lg-3 col-md-6 d-flex flex-column justify-content-center align-items-center py-5 text-center`}>
              <i className="fa-solid fa-laptop-code mb-4 fs-3"></i>
              <h4>APP DEVELOPMENT</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis necstatibus.</p>
            </div>
            <div className={`${style.serviseDiv} col-lg-3 col-md-6 d-flex flex-column justify-content-center align-items-center py-5 text-center`}>
            <i className="fa-solid fa-chart-column mb-4 fs-3"></i>
              <h4>PRODUCT DESIGN</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis necstatibus.</p>
            </div>
            <div className={`${style.serviseDiv} col-lg-3 col-md-6 d-flex flex-column justify-content-center align-items-center py-5 text-center`}>
            <i className="fa-solid fa-gears mb-4 fs-3"></i>
              <h4>UI/UX DESIGN</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis necstatibus.</p>
            </div>
          </div>
        </div>
      </section>
    </>  
  )
}
