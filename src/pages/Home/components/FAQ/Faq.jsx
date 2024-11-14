import React, { useContext} from 'react'
import FaqAccordionItems from './FaqAccordionItems'
import { FaqContext } from '../../../../components/contexts/FaqContext'

const Faq = () => {
    
const {accordionItems} = useContext(FaqContext)

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