import React, {createContext, useState} from "react";

export const FeatureContext = createContext()

const FeatureProvider = ({children}) => {

    const [featureItems, setFeatureItems] = useState([

        {
          imageUrl: "./images/Features/app-feature-1.svg", imageAlt: "image of a bankcard",
          headline: "Easy Payments", content: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
        },
    
        {
          imageUrl: "./images/Features/app-feature-2.svg", imageAlt: "image of a shield",
          headline: "Data Security", content: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non."
        },
    
        {
          imageUrl: "./images/Features/app-feature-3.svg", imageAlt: "image of a bar chart",
          headline: "Cost Statistics", content: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh."
        },
    
        {
          imageUrl: "./images/Features/app-feature-4.svg", imageAlt: "image of a questionmark",
          headline: "Support 24/7", content: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris."
        },
    
        {
          imageUrl: "./images/Features/app-feature-5.svg", imageAlt: "image of a wallet",
          headline: "Regular Cashback", content: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend."
        },
    
        {
          imageUrl: "./images/Features/app-feature-6.svg", imageAlt: "image of a happy smiley",
          headline: "Top Standards", content: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu."
        },
    
      ])
      return (
        <FeatureContext.Provider value={{featureItems}}>
            {children}
        </FeatureContext.Provider>
      )
}

export default FeatureProvider