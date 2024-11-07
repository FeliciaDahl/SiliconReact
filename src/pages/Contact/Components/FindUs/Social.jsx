import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <>
    <div className="social pt-2">
              <div className="social-box">
                <Link to="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-facebook"></i></Link>
              </div>
              <div className="social-box">
                <Link to="http://www.x.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter"></i></Link>
              </div>
              <div className="social-box">
                <Link to="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-instagram"></i></Link>
              </div>
              <div className="social-box">
                <Link to="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-youtube"></i></Link>
              </div>
              </div>
              </>
  )
}

export default Social