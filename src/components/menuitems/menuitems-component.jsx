import React from 'react';
import './menuitem-styles.scss';


const MenuItem = (props) =>
{
     return(
         
         <div className="menu-item">
             
             <div className="background-image"
             style={{backgroundImage:`url(${props.imageUrl})`}}
             >
                    <div className='content'>
                        <h1 className='title'>{props.title}</h1>
                   </div>
             </div>
         </div>
     )
}

export default MenuItem;