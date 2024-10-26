import React from 'react'

const FaqAccordionItems = ({ item }) => {
    return (
    <div className="faq-card">
        <div className="question">
            <h3>{item.question}</h3>
            <button className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
            </button>
        </div>
        <div className="answer">
            <div className="expand">
                <p>{item.answer}</p>
            </div>
        </div>
    </div>
)
}

export default FaqAccordionItems