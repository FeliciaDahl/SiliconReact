import React from 'react'

const FaqAccordionItems = ({item}) => {
    return (
    <div class="faq-card">
        <div class="question">
            <h3>{item.question}</h3>
            <button class="btn-circle">
                <i class="fa-solid fa-chevron-down"></i>
            </button>
        </div>
        <div class="answer">
            <div class="expand">
                <p>{item.answer}</p>
            </div>
        </div>
    </div>
)
}

export default FaqAccordionItems