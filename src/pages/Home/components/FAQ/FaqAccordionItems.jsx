import React, { useState } from 'react'

const FaqAccordionItems = ({ item }) => {

const [isExpanded, setIsExpanded] = useState(false)

const toggleExpansion = () => {
    setIsExpanded(prev => !prev)
}

return (
    <div className={`faq-card ${isExpanded ? 'answer-open' : ''}`}>
        <div className="question">
            <h3>{item.title}</h3>
            <button onClick={toggleExpansion} className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
            </button>
        </div>
        
        <div className="answer">
            <div className="expand">
                <p>{item.content}</p>
            </div>
        </div>
    </div>
)
}

export default FaqAccordionItems