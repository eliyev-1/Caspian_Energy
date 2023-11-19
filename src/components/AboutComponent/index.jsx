import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./AboutComponent.css"


const AboutComponent = (props) => {
  const location = useLocation();
const isHomePage = location.pathname === "/";
  return (
    <div className='about'>

{!isHomePage && (
    <div>
    {props.aboutVideo1}
    </div>
       
        )}
    


      <div>
      {isHomePage && (
      <div className='about__header'>
        <h2>Haqqımızda</h2>
    </div>
       
        )}
        <p>{props.tittle.slice(0,854)}</p>
        {isHomePage && (
      <div className='detail__link__box'>
         <Link to="/about" className="detail__link link" >
                Ətraflı
              </Link>{" "}
    </div>
       
        )}
        
      </div>



      {!isHomePage && (
      <div>
      <p>{props.tittle.slice(854)}</p>
    </div>
       
        )}
    
     
      <div><img src={props.aboutImg1} alt="" /></div>
      
     

   

    </div>
  )
}

export default AboutComponent