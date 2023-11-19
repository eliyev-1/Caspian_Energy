import React from 'react'
import PartnersComponent from '../../components/PartnersComponent'
import PageLinks from "../../components/PageLinks";

const index = () => {
  return (
    <div>
      <PageLinks home="Home" about="Partnyorlar" />

<div className="page__header">
  <h2>Haqqımızda</h2>
</div>
        <PartnersComponent/>

    </div>
  )
}

export default index