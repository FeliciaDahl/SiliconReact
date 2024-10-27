import React, { useState } from 'react'
import FaqAccordionItems from './FaqAccordionItems'

const Faq = () => {
    const [accordionItems, setAccordionItems] = useState([
    {
        question:"Is any of my personal information stored in the App?", 
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, omnis quia natus delectus ducimus non officiis. Corporis fugit!"
    },
    {
        question:"What formats can I download my transaction history in?", 
        answer:"Quis, omnis quia natus delectus ducimus non officiis."
    },
    {
        question:"Can I schedule future transfers?", 
        answer:"Quis, omnis quia natus delectus ducimus non officiis. Corporis fugit ab dolore!"
    },
    {
        question:"When can I use Banking App services?", 
        answer:"Quis ipsum dolor sit amet consectetur adipisicing elit. Quis, omnis quia natus delectus ducimus non officiis. Corporis fugit ab dolore!"
    },
    {
        question:"Can I create my own password that is easy for me to remember?", 
        answer:"Quia natus delectus ducimus non officiis. Corporis fugit ab dolore!"
    },
    {
        question:"What happens if I forget or lose my password?", 
        answer:"Quia natus delectus ducimus non officiis. Corporis fugit ab dolore! Delectus ducimus non officiis."
    },

    ])

    
  return (
 

<>
<div className="faq-heading">
    <h2 className="h2-25 pb-1">Any questions? Check out the FAQs</h2>
    <p className="bd-text f-size-18 pb-1">Still have unanswered questions and need
        to get in touch?</p>
    </div>
        <div className="faq-accordion">
            {
                accordionItems.map((item, index)=> (<FaqAccordionItems key={index} item={item}/>))
            }
        </div>
</>

  )
}

export default Faq