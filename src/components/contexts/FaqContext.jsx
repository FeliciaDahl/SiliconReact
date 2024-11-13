import React, {createContext, useState, useEffect} from "react";

export const FaqContext = createContext()

const FaqProvider = ({children}) => {

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
    <FaqContext.Provider value={{accordionItems}}>
        {children}
    </FaqContext.Provider>
)
}

export default FaqProvider