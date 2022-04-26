import React from 'react'
import style from './Blog.module.css';
import img1 from '../../img/blog/1.jpg';
import img2 from '../../img/blog/2.jpg';
import img3 from '../../img/blog/3.jpg';


export default function Blog() {
  return (
    <>
        <section id='blogDiv' className={`${style.blogDiv} d-flex flex-column justify-content-center align-items-center p-5`}>
            <h2 className={`h1 fw-bold mb-3`}>Our Blog</h2>
            <div className={`headerStyle mb-5`}></div>
            <div className={`container`}>
              <div className={`row`}>
                <div className={`col-md-4 px-3 mb-4`}>
                  <div className='bg-light pb-1'>                  
                  <img src={img1} alt="Web Design Blog Post" className={`img-fluid mb-2`} />
                    <span className='text-muted'>23 November, 2015</span>
                    <h6 className='my-2'>Web Design Blog Post</h6>
                    <p className='pe-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt eius incidunt repellat molestiae.</p>
                  </div>
                </div>
                <div className={`col-md-4 px-3 mb-4`}>
                  <div className='bg-light pb-1'>
                  <img src={img2} alt="Web Design Blog Post" className={`img-fluid mb-2`} />
                    <span className='text-muted'>20 April, 2018</span>
                    <h6 className='my-2'>Development Blog Post</h6>
                    <p className='pe-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt eius incidunt repellat molestiae.</p>
                  </div>
                </div>
                <div className={`col-md-4 px-3 mb-4`}>
                  <div className='bg-light pb-1'>                  
                  <img src={img3} alt="Web Design Blog Post" className={`img-fluid mb-2`} />
                    <span className='text-muted'>17 May, 2017</span>
                    <h6 className='my-2'>Full Width Blog Post</h6>
                    <p className='pe-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt eius incidunt repellat molestiae.</p>
                  </div>
                </div>

              </div>
            </div>
        </section>
    </>
  )
}
