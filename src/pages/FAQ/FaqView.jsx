import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FaqAccordionItems from '../Home/components/FAQ/FaqAccordionItems';
import { FaqContext } from '../../components/contexts/FaqContext';
import SearchBar from './SearchBar';

const FaqView = () => {
   
    const { accordionItems } = useContext(FaqContext);
    const [searchInput, setsearchInput] = useState('');
  
    const filteredItems = accordionItems.filter(item => 
        item.title.toLowerCase().includes(searchInput.toLowerCase()) || 
        item.content.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <>
            <nav className='breadcrumb-nav flex-1 pb-2 pt-2'>
                <i className="fa-regular fa-house"></i>
                <NavLink className="breadcrumb-link" to="/">Homepage</NavLink>
                <i className="fa-regular fa-angles-right"></i>
                <NavLink className="breadcrumb-link" to="/FAQ">FAQ</NavLink>
            </nav>

            <div className='faq-view'>

             <div className= 'faq-content'>
           
                <h2 className=' faq-header h2-32 pb-1'>Search in FAQ</h2>
                <p className='pb-2'>Here you can search among our most common questions!</p>
           
         <SearchBar searchInput={searchInput} 
              setSearchInput={setsearchInput}/>
             </div>


                
            
            <div className="faq-accordion ">
              
           
                {
                    filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <FaqAccordionItems key={item.id} item={item} /> )) )
                    : (<p> Don't you find what you are looking for? Don't worry, you can always contact us 
<NavLink className="faq-link" to="/contact" > here!</NavLink></p> )
                }
            </div>
            </div>
        </>
    )
}



export default FaqView;



// import React, { useContext} from 'react'

// import { NavLink } from 'react-router-dom'
// import FaqAccordionItems from '../Home/components/FAQ/FaqAccordionItems'
// import { FaqContext } from '../../components/contexts/FaqContext'

// const FaqView = () => {

//   const {accordionItems} = useContext(FaqContext)

  
    
//   return (
//     <>

//         <nav className='breadcrumb-nav flex-1 pb-2 pt-2'>
//           <i className="fa-regular fa-house"></i>
//            <NavLink className="breadcrumb-link" to="/">Homepage</NavLink>
//            <i className="fa-regular fa-angles-right"></i>
//            <NavLink className="breadcrumb-link" to="/FAQ">FAQ</NavLink>
//        </nav>
//       <div className='faq-view'>
//         <h2>Search in FAQ</h2>
//       </div>
//        <div className="faq-accordion">
//             {
//                 accordionItems.map((item)=> (<FaqAccordionItems key={item.id} item={item}/>))
//             }
//         </div>
//     </>
//   )
// }

// export default FaqView