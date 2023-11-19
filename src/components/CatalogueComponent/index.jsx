import React from 'react'
import { Link } from 'react-router-dom'
import catalogue from "../../assets/img/catalogue/img1.png"
import {faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CatalogueComponent.css"

const CAtalogueComponent = () => {
  return (
    <div className='catalogue'>
      <div className="catalogue__left">
        <h2>Kataloq</h2>
        <p>Məhsullarımızla tanış olmaq üçün kataloqumuzu pdf formatında yükləyə bilərsiniz</p>
        <Link to="https://caspian-energy.net/storage/catalogue/N3aVRQCrQEPTNoRAjYvKe81S8HbZHJ8khzxWBdLq.pdf" className='download__link'><FontAwesomeIcon icon={faCloudArrowDown} /> Yukle</Link>
      </div>
      <div className="catalogue__right">
        <div className="catalogue__right__image">
          <img src={catalogue} alt="" />
        </div>

      </div>


    </div>
  )
}

export default CAtalogueComponent