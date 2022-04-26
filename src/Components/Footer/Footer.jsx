import React from 'react'

export default function Footer() {
  return (
    <>
        <footer>
            <div className={`w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light p-5`} style={{backgroundColor:'#333'}}>
                <div>
                    <a href='https://www.facebook.com/' target='_blank' ><i className="fa-brands fa-facebook-f m-2"></i></a>
                    <a href='https://twitter.com/' target='_blank' ><i className="fa-brands fa-twitter m-2"></i></a>
                    <a href='https://www.google.com/' target='_blank' ><i className="fa-brands fa-google m-2"></i></a>
                    <a href='https://github.com/' target='_blank' ><i className="fa-brands fa-github m-2"></i></a>
                </div>
                <p>Copy Right 2018 © By <span style={{color:'#ff305b'}}>Theme-fair</span> All Rights Reserved</p>
            </div>

        </footer>
    </>
  )
}
