import React from 'react'
import { Link } from 'react-router-dom'
const PageLinks = (props) => {
  return (
  <>
    <div className="page__links">
        <span><Link to="/" className='link'>{props.home}</Link></span> / <span>{props.about}</span>
      </div>
  </>
  )
}

export default PageLinks
