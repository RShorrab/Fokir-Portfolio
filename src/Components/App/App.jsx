import React from 'react'
import About from '../About/About'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'


export default function App() {
  return ( 
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  )
}
