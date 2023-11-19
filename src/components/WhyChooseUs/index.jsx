import React from 'react'
import whyChooseUsImg from "../../assets/img/whyChooseUsImg.jpg"
import {faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./whyChooseUs.css"

const WhyChooseUs = () => {
  return (
   <div className="Why__choose__us">
    <div className="Why__choose__us__left">
        <div className="Why__choose__us__left__image">
        <img src={whyChooseUsImg} alt="" />
        </div>
     
    </div>
    <div className="Why__choose__us__right">

        <h2>Niyə məhz biz?</h2>
        <ul>
            <li>
                <div className='check__icon'><FontAwesomeIcon icon={faCircleCheck} /></div>
                <div>
                    <h5>
                    Həmişə Bakı anbarımızda
                    </h5>
                    <p>
                    Biz təklif etdiyimiz məhsulları yüklü miqdarda Bakıda stok tuturuq. 
                    Bu səbəbdən məhsulları gözləməyə ehtiyac qalmayacaqdır. 
                    Məhsullarımızı Bakıda anbarlarımıza yaxınlaşaraq operativ şəkildə əldə edə bilərsiniz.
                    </p>
                </div>
            </li>

            <li>
                <div className='check__icon'><FontAwesomeIcon icon={faCircleCheck} /></div>
                <div>
                    <h5>
                    Adımıza dəyər veririk
                    </h5>
                    <p>
                    Biz illərdir respublika bazarındayıq və adımız, müsbət şirkət imicimiz bizim üçün çox dəyərlidir. Hətta qazanc bizim üçün ikinci plandadır. 
                    Bu səbəblə biz müştərilərə düzgün xidmət göstərməyə və imicimizi qoruyub saxlamağa çalışırıq.
                    </p>
                </div>
            </li>
            <li>
                <div className='check__icon'><FontAwesomeIcon icon={faCircleCheck} /></div>
                <div>
                    <h5>
                    Keyfiyyət və qiymətin görüşdüyü nöqtə
                    </h5>
                    <p>
                    Şirkətimiz keyfiyyət və qiymətin görüşdüyü nöqtədir. 
                    Keyfiyyəti yüksək saxlamaq şərti ilə ən uyğun qiyməti məhz biz sizə təklif edə bilərik.
                    </p>
                </div>
            </li>

        </ul>
    </div>


   </div>
  )
}

export default WhyChooseUs