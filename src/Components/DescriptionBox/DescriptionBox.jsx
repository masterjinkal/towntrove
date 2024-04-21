import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An ecommerce platform is the content management system (CMS) and commerce engine websites use to manage catalogued products, register purchases and manage a users relationship with an online retailer. It doesn't matter if your business is large or small, B2B or B2C, selling tangible goods or providing remote services.</p>
            <p>"Ecommerce" or "electronic commerce" is the trading of goods and services on the internet.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
