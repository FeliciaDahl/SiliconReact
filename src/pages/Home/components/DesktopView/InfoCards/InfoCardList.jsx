import React from 'react'

const InfoCardList = ({content}) => {
  return (
   
    <ul className="fa-ul">
        <li className="pb-1"><span className="fa-li"><i className="fa-sharp fa-regular fa-circle-check"></i></span>
        <p>{content.content}</p></li>
    </ul>
)
}

export default InfoCardList