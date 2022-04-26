import React, { useEffect } from 'react'
import style from './Portfolio.module.css';
import img1 from '../../img/portfolio/1.jpg';
import img2 from '../../img/portfolio/2.jpg';
import img3 from '../../img/portfolio/3.jpg';
import img4 from '../../img/portfolio/4.jpg';
import img5 from '../../img/portfolio/5.jpg';
import img6 from '../../img/portfolio/6.jpg';
import Isotope from 'isotope-layout/dist/isotope.pkgd.js';

//const Isotope = require('isotope-layout/dist/isotope.pkgd.js')

export default function Porfolio() 
{
  
  let started = false;
  useEffect(() => 
  {
    dataFiltering();
    dataCounting();
  }, [])
  
  function dataCounting()
  {
    let counters = document.querySelectorAll(`.counter`)
    let section = document.querySelector(`.headerStyle`)

    do //to prevent infinit counting 
    {
      window.onscroll = function ()
      {
        if (window.scrollY >= section.offsetTop)
        {
          if(!started)
          {
            counters.forEach( (counter) =>
            {
              let goal = counter.dataset.goal;
              let count = setInterval( ()=>
              {
                counter.textContent++;
                if(counter.textContent == goal)
                {
                  clearInterval(count)
                }

              }, 1000/goal );
            });
          }
          started = true;
        }
      }
    } while(false)

  }
  
  function dataFiltering()
  {
    let portoPics = document.querySelector(`.${style.portfolioPics}`)
    var iso = new Isotope(portoPics, 
      {
        itemSelector: '.allCategories',
        percentPosition: true,
        masonry: 
        {
          columnWidth: '.allCategories'
        } 
    })
    iso.arrange({filter: '.category3'})
    let buttons = document.querySelector(`.${style.portfolioMenu}`);
    buttons.addEventListener('click', function(event)
    {
      var filterValue = event.target.getAttribute('data-filter');
      iso.arrange({filter: filterValue})
    })    
  }
  
  function portoButtons(category)
  {
    let buttons = document.querySelectorAll(".portoButtons")
    for (var i = 0; i < buttons.length; ++i) {
      buttons[i].classList.remove(`${style.active}`);
    }
    let targetBtn = document.querySelector(`.${category}`)
    targetBtn.classList.add(`${style.active}`)
  }
  return (
   <>
    <section id='porfolioDiv' className={`pt-5 d-flex flex-column align-items-center justify-content-center `}>
        <h2 className={`h1 fw-bold my-4`}>Our Portfolio</h2>
        <div className={`headerStyle`}></div>
        <div className={`container mt-5`}>
          <div className={`row mb-5`}>
            <div className={`col-12 p-0`}>
              <div className={`${style.portfolioMenu} text-center`}>
                <button onClick={()=> portoButtons('all')} className={`btn bg-transparent  shadow-none portoButtons all `} data-filter='.allCategories'>All</button>
                <button onClick={()=> portoButtons('graphic')} className={`btn bg-transparent shadow-none portoButtons graphic`} data-filter='.category1'>GRAPHIC</button>
                <button onClick={()=> portoButtons('web')} className={`btn bg-transparent shadow-none portoButtons web `} data-filter='.category2'>WEB DESIGN</button>
                <button onClick={()=> portoButtons('branding')} className={`btn bg-transparent shadow-none portoButtons branding ${style.active}`} data-filter='.category3'>BRANDING</button>
              </div>
            </div>
          </div>
          <div className={`row ${style.portfolioPics}`} style={{minHeight: '335px'}}>
            <div className={`col-lg-4 col-md-6 category2 allCategories`}>
              <img src={img1} alt="" className='img-fluid mb-4'/>
            </div>
            <div className={`col-lg-4 col-md-6 category1 category3 allCategories`}>
              <img src={img2} alt="" className='img-fluid mb-4'/>
            </div>
            <div className={`col-lg-4 col-md-6 category1 allCategories`}>
              <img src={img3} alt="" className='img-fluid mb-4'/>
            </div>
            <div className={`col-lg-4 col-md-6 category2 allCategories`}>
              <img src={img4} alt="" className='img-fluid mb-4'/>
            </div>
            <div className={`col-lg-4 col-md-6 category1 category2 allCategories`}>
              <img src={img5} alt="" className='img-fluid mb-4'/>
            </div>
            <div className={`col-lg-4 col-md-6 category1 category3 allCategories`}>
              <img src={img6} alt="" className='img-fluid mb-4'/>
            </div>
          </div>
        </div>

        <div className={`${style.data} row mt-5 pt-5 w-100 px-5`}>
            <div className={`col-sm-3 mb-5 d-flex flex-column justify-content-center align-items-center text-center`}>
              <i className="fa-solid fa-user-group fs-4 mb-2"></i>
              <span className={`counter fs-3 fw-bold`} data-goal='120'>0</span>
              <span>Team members</span>
            </div>
            <div className={`col-sm-3 mb-5 d-flex flex-column justify-content-center align-items-center text-center`}>
              <i className="fa-solid fa-copy fs-4 mb-2"></i>
              <span className={`counter fs-3 fw-bold`} data-goal='217'>0</span>
              <span>Complete Projects</span>
            </div>
            <div className={`col-sm-3 mb-5 d-flex flex-column justify-content-center align-items-center text-center`}>
              <i className="fa-solid fa-cloud-arrow-down fs-4 mb-2"></i>
              <span className={`counter fs-3 fw-bold`} data-goal='780'>0</span>
              <span>Files Downloaded</span>
            </div>
            <div className={`col-sm-3 mb-5 d-flex flex-column justify-content-center align-items-center text-center`}>
              <i className="fa-solid fa-mug-saucer fs-4 mb-2"></i>
              <span className={`counter fs-3 fw-bold`} data-goal='602'>0</span>
              <span>Lines Of Code</span>
            </div>
          </div>
    </section>
   </>
  )
}
