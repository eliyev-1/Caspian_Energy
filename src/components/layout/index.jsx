import React from 'react'
import "./layout.css"
import NavLogo from "../../assets/img/navLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Layout = () => {
  return (
    <>
    <header>
      <nav className='container'>
            <div className="nav__left">
                  <div className="nav__logo">
                        <img src={NavLogo} alt="" />
                  </div>

                 
            </div>
            <div className="nav__right">
                  <div className="nav__right__top">
                        <div className="nav__right__top__date">
                        Monday – Saturday 9:00 – 18:00
                        </div>
                        <div className="nav__right__top__numbers">
                        <span><FontAwesomeIcon icon={faPhone} bounce /></span>
                         <span> +994125555000 </span><span> +994504588888  </span>
                        </div>

                  </div>

            </div>
      </nav>
    </header>
    </>
  )
}

export default Layout