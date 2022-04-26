import React, { useEffect } from 'react'
import Typed from 'typed.js';
import style from './Home.module.css'


export default function Home() 
{
  useEffect(() => 
  {
    var typed = new Typed('#typed', 
    {
      typeSpeed: 60,
      backSpeed: 60,
      smartBackspace: false,
      loop: true,
      strings: ['Developer ', 'Designer ']
    });

  }, [])
  
  
  return (
    <>
        <section id='homeDiv' className={`${style.homeDiv}`}>
            <div className={` ${style.homeLayout} d-flex flex-column justify-content-center align-items-center`} >
                <span>Hello i'm</span>
                <h1>ALEX SMITH</h1>
                <p>Professional Web <span id='typed'></span> </p>
            </div>
        </section>

        
    </>
  )
}
