import React from 'react';
import CoustomButton from '../../components/button/coustom-button';
import './homepage-styles.scss';



const HomePage =( ) =>
{
    return(
       <div className="homecontainer">
           <div className="text-1">
               <p>Happiness Is Cooking <br></br>At Home
               </p>
           </div>
           <div className="buttons">
               
               <CoustomButton className="but" >Pick a Meal</CoustomButton>
           </div>
          
       </div>

    )
}

export default HomePage;