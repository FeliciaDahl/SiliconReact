import React, { useState } from 'react'
import FeatureImages from './FeatureImages'
import FeatureItems from './FeatureItems'

const Features = () => {

    const [features, setFeatures] = useState([

        { imageUrl:"./images/features/app-feature-1.svg", imageAlt:"image of a bankcard",
          headline: "Easy Payments", content: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."},

        { imageUrl:"./images/features/app-feature-2.svg", imageAlt:"image of a shield",
          headline: "Data Security", content: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non."},

        { imageUrl:"./images/features/app-feature-3.svg", imageAlt:"image of a bar chart",
          headline: "Cost Statistics", content: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh."},

        { imageUrl:"./images/features/app-feature-4.svg", imageAlt:"image of a questionmark",
          headline: "Support 24/7", content: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris."},

        { imageUrl:"./images/features/app-feature-5.svg", imageAlt:"image of a wallet",
          headline: "Regular Cashback", content: "Sit facilisis dolor arcu, fermentumvestibulum arcu elementum imperdiet eleifend."},

        { imageUrl:"./images/features/app-feature-6.svg", imageAlt:"image of a happy smiley",
          headline: "Top Standards", content: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu."},

    ])
  return (
<section aria-label="app-features">
<div className="container">
<div className="app-features grid-2">

<div className="app-info">
    <h2 className="h2-features h2-28 pb-1">App Features</h2>
    <p className="p-features f-size-18 bd-text pb-2">Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin volutpat mollis egestas.
        Nam luctus facilisis ultrices. Pellentesque
        volutpat ligula est. Mattis fermentum, at nec
        lacus.</p>

<div className="benefit-box">
{
    features.map((item, index) => (<FeatureItems key={index} item={item} /> ))    
}
</div>
</div>
<FeatureImages/>

</div>  
</div>
</section>
  )
}

export default Features