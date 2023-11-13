import React from 'react'
import "./layout.css"
 import { Link } from 'react-router-dom'
import NavLogo from "../../assets/img/navLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Layout = ({children}) => {
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
                  <div className="nav__right__bottom">
                        
                              <ul className='nav__right__bottom__menu'>
                                    <li> <Link to='/' className='menu__link'>Home</Link> </li>
                                    <li> <Link to='/about'className='menu__link'>About</Link> </li>
                                    <li> <Link to='/'className='menu__link'>Products</Link> </li>
                                    <li> <Link to='/'className='menu__link'>Partners</Link> </li>
                                    <li> <Link to='/'className='menu__link'>Catalogue</Link> </li>
                                    <li> <Link to='/'className='menu__link'>News</Link> </li>
                                    <li> <Link to='/'className='menu__link'>Contact</Link> </li>
                                    
                              </ul>

                              <select className='nav__right__bottom__language'>
                                    <option value=""><Link to='/'className='menu__link'>AZE</Link></option>
                                    <option value=""><Link to='/'className='menu__link'>ENG</Link></option>
                                    <option value=""><Link to='/'className='menu__link'>RUS</Link></option>
                              </select>

                   
                        
                  </div>

            </div>
      </nav>
    </header>
    <div className="container">
    {children}
    </div>
    </>
  )
}

export default Layout