import React from 'react'

const FeatureItems = ({item}) => {
  return (

<div className="box">
    <div className="box-img">
    <img src={item.imageUrl} alt={item.imageAlt}/>
    </div>

<div className="box-content">
    <h3 className="h3-20">{item.headline}</h3>
    <p className="bd-text pt-1">{item.content}</p>
</div>
</div>

  )
}

export default FeatureItems