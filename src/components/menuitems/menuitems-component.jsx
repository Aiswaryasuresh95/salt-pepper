import React from 'react';


const MenuItem = (props) =>
{
     return(
         <div className="background-image"
         style={{backgroundImage : `url(${props.imageUrl})`}}
         >
          <h1>{props.title}</h1>

         </div>
     )
}

export default MenuItem;