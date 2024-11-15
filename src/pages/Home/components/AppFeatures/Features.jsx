import React, { useContext } from 'react'
import FeatureImages from './FeatureImages'
import FeatureItems from './FeatureItems'
import { FeatureContext } from '../../../../components/contexts/FeatureContext'

const Features = () => {

  const { featureItems } = useContext(FeatureContext)

  return (
    <section aria-label="app-features">
      <div className="container">
        <div className="app-features grid-2">

          <div className="app-info">
            <h2 className="h2-features h2-28 pb-1">App Features</h2>
            <p className="p-features f-size-18 bd-text pb-2">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin volutpat mollis egestas.
              Nam luctus facilisis ultrices. Pellentesque
              volutpat ligula est. Mattis fermentum, at nec lacus.</p>

            <div className="benefit-box">
              {
                featureItems.map((item) => (<FeatureItems key={item.id} item={item} />))
              }
            </div>
          </div>

          <FeatureImages />
        </div>
      </div>
    </section>
  )
}

export default Features