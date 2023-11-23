import React from 'react';
import img1 from "../../assets/img/products/img1.jpg"
import "./products.css"
import { Link } from 'react-router-dom';

const Products = () => {

  return (
    <>


      <div className="products">
        <Link to='/products/1' className='link'>
          <div className="products__card">
            <div className="products__card__image">
              <img src={img1} alt="" />
            </div>
            <div className="products__card__name__background">
              <span>Daş yunu </span>

            </div>


          </div>
        </Link>
        <Link to='/products/2' className='link'>
          <div className="products__card">
            <div className="products__card__image">
              <img src={img1} alt="" />
            </div>
            <div className="products__card__name__background">
              <span>Daş yunu</span>

            </div>


          </div>
        </Link>
        <Link to='/products/3' className='link'>
          <div className="products__card">
            <div className="products__card__image">
              <img src={img1} alt="" />
            </div>
            <div className="products__card__name__background">
              <span>Daş yunu</span>

            </div>


          </div>
        </Link>

      </div>

    </>
  )
}

export default Products