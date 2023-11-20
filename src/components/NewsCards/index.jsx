
 import img1 from "../../assets/img/news/img1.jpg"
 import "./newsCards.css"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faClock ,faChevronRight  } from "@fortawesome/free-solid-svg-icons";
 import { Link } from 'react-router-dom';
 import { useEffect,useState } from 'react'
 
 const NewsCards = ({ newsType }) => {
  let [newsData,setNewsData]=useState([])
  useEffect(()=>{
    let getNews = async ()=>{
      let res = await fetch('http://localhost:5000/posts')
      if(res.ok){
        let respone = await res.json();
        setNewsData(respone)
      }
    }
    getNews();
  },[])
  // .filter(item => item.type === newsType)
   return (
     <>
     <div className="news__cards">
      {newsData.map((item)=>{
       return <div className="news__cards__item">
        <div className="news__cards__item__image">
            <img src={img1} alt="" />
          
        </div>
        <div className="news__cards__item__background">


          <div className="news__cards__item__date">
            <span><FontAwesomeIcon icon={faClock} /></span> <span>07.02.2023</span>
          </div>
          <div className="news__cards__item__tittle">
          {item.title}
          </div>
          <div className="news__cards__item__link">
            <Link className='link'><span>Ətraflı</span><span><FontAwesomeIcon icon={faChevronRight} /></span></Link>

          </div>



        </div>

        
     </div>

      })}
    
     
     

     </div>

     </>
   )
 }
 
 export default NewsCards