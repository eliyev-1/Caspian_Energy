import React from 'react'
import {faLocationDot,faPhone,faEnvelope,faClock ,faGlobe  } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./contactComponent.css"

const ContactComponent = () => {
  return (
    <>
    <div className="contact">
        <div className="contact__left">
            <h2>Əlaqə</h2>
            <p className='contact__tittle'>
            Bizimlə əlaqə saxlamaq üçün:
            </p>
            <ul>
                <li><span><FontAwesomeIcon icon={faLocationDot} /></span><span>Ünvan:</span><p>Bakı şəhəri, Nərimanov rayonu, Əhməd Rəcəbli 62A</p></li>
                <li><span><FontAwesomeIcon icon={faPhone} /></span><span>Tel: Mobil:</span><p>012 555 50 00</p><p>050 458 88 88</p></li>
                <li><span><FontAwesomeIcon icon={faEnvelope} /></span><span>E-mail</span><p>office@caspian-energy.net</p></li>
                <li><span><FontAwesomeIcon icon={faClock} /></span><span>İş vaxtı</span><p>Bazar ertəsi - Şənbə</p><p>9:00 – 18:00</p></li>
                <li><span><FontAwesomeIcon icon={faGlobe} /></span><span>Bizi izləyin</span>
                <div><span><Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="14.75" stroke="white" stroke-width="0.5"/>
  <path d="M17.325 6C16.0984 6 14.922 6.48728 14.0546 7.35463C13.1873 8.22199 12.7 9.39837 12.7 10.625V13.2H10.225C10.101 13.2 10 13.3 10 13.425V16.825C10 16.949 10.1 17.05 10.225 17.05H12.7V24.025C12.7 24.149 12.8 24.25 12.925 24.25H16.325C16.449 24.25 16.55 24.15 16.55 24.025V17.05H19.047C19.15 17.05 19.24 16.98 19.265 16.88L20.115 13.48C20.1234 13.4468 20.1241 13.4122 20.117 13.3787C20.11 13.3452 20.0954 13.3138 20.0744 13.2868C20.0533 13.2598 20.0264 13.2379 19.9957 13.2229C19.965 13.2079 19.9312 13.2 19.897 13.2H16.55V10.625C16.55 10.5232 16.57 10.4224 16.609 10.3284C16.6479 10.2344 16.705 10.149 16.777 10.077C16.849 10.005 16.9344 9.94794 17.0284 9.90899C17.1224 9.87005 17.2232 9.85 17.325 9.85H19.925C20.049 9.85 20.15 9.75 20.15 9.625V6.225C20.15 6.101 20.05 6 19.925 6H17.325Z" fill="white"/>
</svg></Link></span>
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M13.75 11C13.75 11.5439 13.5887 12.0756 13.2865 12.5278C12.9844 12.9801 12.5549 13.3325 12.0524 13.5407C11.5499 13.7488 10.9969 13.8033 10.4635 13.6972C9.93005 13.5911 9.44005 13.3291 9.05546 12.9445C8.67086 12.5599 8.40895 12.0699 8.30284 11.5365C8.19673 11.0031 8.25119 10.4501 8.45933 9.94762C8.66747 9.44512 9.01995 9.01563 9.47218 8.71346C9.92442 8.41128 10.4561 8.25 11 8.25C11.7286 8.25227 12.4268 8.54273 12.942 9.05796C13.4573 9.57319 13.7477 10.2714 13.75 11ZM19.5938 7.21875V14.7812C19.5938 16.0576 19.0867 17.2817 18.1842 18.1842C17.2817 19.0867 16.0576 19.5938 14.7812 19.5938H7.21875C5.9424 19.5938 4.71832 19.0867 3.8158 18.1842C2.91328 17.2817 2.40625 16.0576 2.40625 14.7812V7.21875C2.40625 5.9424 2.91328 4.71832 3.8158 3.8158C4.71832 2.91328 5.9424 2.40625 7.21875 2.40625H14.7812C16.0576 2.40625 17.2817 2.91328 18.1842 3.8158C19.0867 4.71832 19.5938 5.9424 19.5938 7.21875ZM15.125 11C15.125 10.1842 14.8831 9.38663 14.4298 8.70827C13.9766 8.02992 13.3323 7.50121 12.5786 7.189C11.8248 6.87679 10.9954 6.7951 10.1953 6.95426C9.39508 7.11343 8.66008 7.50629 8.08318 8.08318C7.50629 8.66008 7.11343 9.39508 6.95426 10.1953C6.7951 10.9954 6.87679 11.8248 7.189 12.5786C7.50121 13.3323 8.02992 13.9766 8.70827 14.4298C9.38663 14.8831 10.1842 15.125 11 15.125C12.094 15.125 13.1432 14.6904 13.9168 13.9168C14.6904 13.1432 15.125 12.094 15.125 11ZM16.5 6.53125C16.5 6.32729 16.4395 6.12791 16.3262 5.95832C16.2129 5.78873 16.0518 5.65655 15.8634 5.5785C15.675 5.50045 15.4676 5.48002 15.2676 5.51981C15.0675 5.55961 14.8838 5.65782 14.7395 5.80205C14.5953 5.94627 14.4971 6.13002 14.4573 6.33006C14.4175 6.53011 14.4379 6.73746 14.516 6.92589C14.5941 7.11433 14.7262 7.27539 14.8958 7.3887C15.0654 7.50202 15.2648 7.5625 15.4688 7.5625C15.7423 7.5625 16.0046 7.45385 16.198 7.26045C16.3913 7.06706 16.5 6.80475 16.5 6.53125Z" fill="white"/>
</svg>
</span>

</div>
                </li>
            </ul>
        </div>
        <div className="contact__right">
            <h2>
            Bizə Sorğu Göndərin
            </h2>
            <form >
               <div>
               <label htmlFor="">Ad və soyad</label>
                <input type="text" placeholder='Ad və soyad' />
               </div>
               <div>
               <label htmlFor="">E-mail</label>
                <input type="text" placeholder='E-mail' />
               </div>
               <div>
               <label htmlFor="">Mesaj</label>
                <textarea cols="30" rows="10" placeholder='Mesaj yaz'></textarea>
               </div>
               <div >
               <Link  className='send__link'> Göndər</Link>


               </div>

            </form>
        </div>
        

    </div>
    </>
  )
}

export default ContactComponent