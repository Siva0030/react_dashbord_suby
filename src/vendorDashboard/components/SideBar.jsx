import React from 'react'

const SideBar = ({showFirmHandler ,showProductHandler,showAppProductHandler,showFirmTitle}) => {
  return (
    <div className='sideBarSection'>
        <ul>
            {showFirmTitle ?  <li onClick={showFirmHandler}>Add Firm</li> :""}
           
            <li onClick={showProductHandler}>Add Product</li>
            <li onClick={showAppProductHandler}>All Products</li>
            <li>user Details</li>
        </ul>
    </div>
  )
}

export default SideBar