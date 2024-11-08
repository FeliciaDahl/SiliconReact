import React, { useState } from 'react'
import PartnerItems from './PartnerItems'
const Partners = () => {

    const [partnersImg, setPartnersImg] = useState([
        { nr: "1", imageUrl:"./images/Partners/brand-1.svg", imageAlt: "partner 1"  },
        { nr: "2", imageUrl:"./images/Partners/brand-2.svg", imageAlt: "partner 2"  },
        { nr: "3", imageUrl:"./images/Partners/brand-3.svg", imageAlt: "partner 3"  },
        { nr: "4", imageUrl:"./images/Partners/brand-4.svg", imageAlt: "partner 4"  },
        { nr: "5", imageUrl:"./images/Partners/brand-5.svg", imageAlt: "partner 5"  },
        { nr: "6", imageUrl:"./images/Partners/brand-6.svg", imageAlt: "partner 6"  }
    ])
  return (

<section aria-label="partners" id="brand-icons">
<div className="container">
<div className="icons flex-2">

{
    partnersImg.map((item, index) => (<PartnerItems key={index} item={item} /> ))
}
</div>
</div>
</section>
  )
}

export default Partners