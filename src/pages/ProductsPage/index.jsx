import React from 'react'
import ProductsComponent from '../../components/ProduductsComponent'
import PageLinks from '../../components/PageLinks'
import "./productsPage.css"


const Products = () => {
  return (

    <div className="container">
      <PageLinks home="Home" about="Məhsullar" />

      <div className="page__header">
        <h2>Məhsullar</h2>
      </div>
      <ProductsComponent />
    </div>
  )
}

export default Products