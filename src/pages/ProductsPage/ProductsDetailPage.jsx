import React from 'react'
import ProductsDetailComponent from '../../components/ProduductsComponent/productsDetailComponent';
import PageLinks from '../../components/PageLinks';

const ProductsDetail = () => {

  return (
    <>

      <div className="container ProductsDetailComponent">
        <PageLinks home="Home" about="Isulating Materials" />

        <div className="page__header">
          <h2>Isulating Materials</h2>
        </div>
        <ProductsDetailComponent />
      </div>



    </>
  )
}

export default ProductsDetail