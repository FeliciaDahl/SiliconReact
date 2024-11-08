import React, { useState } from 'react'
import InfoCardList from './InfoCardList'
import ButtonLearnMore from './ButtonLearnMore'
import InfoCardTopImages from './InfoCardTopImages'
import InfoCardBottomImages from './InfoCardBottomImages'
import InfoCardBottomContent from './InfoCardBottomContent'

const InfoCardsDesktop = () => {

    const [listContent, setListContent] = useState([
        {content: "Banking transactions are free for you"},
        {content: "No monthly cash commission"},
        {content: "Manage payments and transactions online"}
    ])
    return (

<section aria-label="learn more" className="desktop-only">

    <div className="container">

        <div className="info-cards">

            <div className="info-card grid-2">
                <div className="info-text">
                    <h2 className="h2-32 pb-2">Make your money transfer simple and clear</h2>
                    
                    {
                        listContent.map((content, index) => (<InfoCardList key={index} content={content} />))
                    }

                    <ButtonLearnMore />
                </div>

                <InfoCardTopImages />
            </div>

            <div className="info-card grid-2">

                <InfoCardBottomImages />

                <div className="info-text">
                    <h2 className="h2-32 pb-2">Receive payment from international bank details</h2>

                    <InfoCardBottomContent />

                    <ButtonLearnMore />
                </div>

            </div>
        </div>
    </div>
</section>

)
}

export default InfoCardsDesktop