import React from 'react'

const PartnerItems = ({item}) => {
  return (
    
  <div id={`brand-${item.nr}`} className="icon-boxes">
    <img src={item.imageUrl} alt={item.imageAlt} />
  </div>
  
  )
}

export default PartnerItems