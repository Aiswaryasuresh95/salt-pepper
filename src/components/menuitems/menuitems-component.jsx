import React from 'react';
import './menuitem-styles.scss';


const MenuItem = ({id,name,imageUrl}) =>
{
     return(
         
         <div className="menu-item">
             
             <div className="background-image"
             style={{backgroundImage:`url(${imageUrl})`}}
             >
                    <div className='content'>
                        <h1 className='title'>{name}</h1>
                   </div>
             </div>
         </div>
     )
}

export default MenuItem;