import React, { useEffect, useState } from 'react'
import FaqAccordionItems from './FaqAccordionItems'

const Faq = () => {
    const [accordionItems, setAccordionItems] = useState([])

    const fetchData =  async () => {
        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordionItems(data)
    } 

useEffect(() => {
    fetchData()
}, [])
    
  return (

<>
<div className="faq-heading">
    <h2 className="h2-25 pb-1">Any questions? Check out the FAQs</h2>
    <p className="bd-text f-size-18 pb-1">Still have unanswered questions and need
        to get in touch?</p>
    </div>
        <div className="faq-accordion">
            {
                accordionItems.map((item)=> (<FaqAccordionItems key={item.id} item={item}/>))
            }
        </div>
</>

  )
}

export default Faq