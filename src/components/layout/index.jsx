import React, { useState } from "react";
import "./layout.css";
import { Link ,useLocation } from "react-router-dom";
import NavLogo from "../../assets/img/navLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import HeaderSlider from "../HeaderSlider";
const Layout = ({ children }) => {
  let [navRightBottom, setnavRightBottom] = useState("nav__right__bottom");
  let [menuButton, setMenuButton] = useState("nav__menu__button");
  let [exitButton, setExitButton] = useState("nav__exit__button");
  let [navLogo, setNavLogo] = useState("nav__logo");
  let [nav, setNav] = useState("");
  let menuClick = () => {
    setnavRightBottom(
      navRightBottom === "nav__right__bottom"
        ? "nav__right__bottom__active "
        : "nav__right__bottom"
    );
    setMenuButton(
      menuButton === "nav__menu__button"
        ? "nav__menu__button__active"
        : "nav__menu__button"
    );
    setExitButton(
      exitButton === "nav__exit__button"
        ? "toggle__active"
        : "nav__exit__button"
    );
    setNav(nav === "" ? "nav__active" : "");
    setNavLogo(navLogo === "nav__logo" ? "nav__logo__active" : "nav__logo");
  };
  let closeMenu = () => {
      setnavRightBottom("nav__right__bottom");
      setMenuButton("nav__menu__button");
      setExitButton("nav__exit__button");
      setNav("");
      setNavLogo("nav__logo");
    };
    const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <header className=".header">
        <nav className={`nav ${isHomePage ? "" : "static-navbar"}`}>
          <div className="container">
            <div className="nav__left">
              <div className={navLogo}>
              <Link to="/" className="link" onClick={closeMenu}>
              <img src={NavLogo} alt="" />
              </Link>{" "}
              </div>
              <div className="nav__buttons" onClick={menuClick}>
                <div className={menuButton}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={exitButton}>
                  <FontAwesomeIcon icon={faX} />
                </div>
              </div>
            </div>
            <div className="nav__right">
              <div className="nav__right__top">
                <div className="nav__right__top__date">
                  Monday – Saturday 9:00 – 18:00
                </div>
                <div className="nav__right__top__numbers">
                  <span>
                    <FontAwesomeIcon icon={faPhone} bounce />
                  </span>
                  <span> +994125555000 </span>
                  <span> +994504588888 </span>
                </div>
              </div>
              <div className={navRightBottom}>
                <ul className="nav__right__bottom__menu">
                <li>
              {" "}
              <Link to="/" className="link" onClick={closeMenu}>
                Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about" className="link" onClick={closeMenu}>
                About
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/products" className="link" onClick={closeMenu}>
              Products
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/partners" className="link" onClick={closeMenu}>
              Partners
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/catalogue" className="link" onClick={closeMenu}>
              Catalogue
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about" className="link" onClick={closeMenu}>
              News
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact" className="link" onClick={closeMenu}>
              Contact
              </Link>{" "}
            </li>
           
                </ul>

                <select className="nav__right__bottom__language">
                  <option value="">
                    <Link to="/" className="link" >
                      AZE
                    </Link>
                  </option>
                  <option value="">
                    <Link to="/" className="link">
                      ENG
                    </Link>
                  </option>
                  <option value="">
                    <Link to="/" className="link">
                      RUS
                    </Link>
                  </option>
                </select>
                <ul className="nav__right__bottom__slider__menu__laguage">
                  <li>
                    {" "}
                    <Link to="/" className="link" onClick={closeMenu}>
                      AZE
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/about" className="link" onClick={closeMenu}>
                      ENG
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/" className="link" onClick={closeMenu}>
                      RUS
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {isHomePage && (
          <div className="header__slider">
            <HeaderSlider />
          </div>
        )}
      </header>
      <div className="container">{children}</div>

      <footer className="container">
      <div className="footer__logo">
              <Link to="/" className="link" onClick={closeMenu}>
              <img src={NavLogo} alt="" />
              </Link>{" "}
              </div>
              <ul className="footer__menu">
                <li>
              {" "}
              <Link to="/" className="link" onClick={closeMenu}>
                Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about" className="link" onClick={closeMenu}>
                About
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="link" onClick={closeMenu}>
              Products
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about" className="link" onClick={closeMenu}>
              Partners
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="link" onClick={closeMenu}>
              Catalogue
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about" className="link" onClick={closeMenu}>
              News
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="link" onClick={closeMenu}>
              Contact
              </Link>{" "}

              
            </li>
            <li>
              {" "}
              <Link to="/" className="link" onClick={closeMenu}>
              Support
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about" className="link" onClick={closeMenu}>
              Privacy policy
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="link" onClick={closeMenu}>
              Terms of use
              </Link>{" "}
            </li>
           
                </ul>

                <div className="footer__bottom">
                  <p>@All right reserved.Developed by Webcoder.</p>
                  <ul className="footer__bottom__left">
                <li>
              {" "}
              <Link to="/" className="link" onClick={closeMenu}>
              Support
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about" className="link" onClick={closeMenu}>
              Privacy policy
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="link" onClick={closeMenu}>
              Terms of use
              </Link>{" "}
            </li>
            
            
           
                </ul>

                </div>


        
      </footer>
    </>
  );
};

export default Layout;
