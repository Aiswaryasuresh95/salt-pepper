import React from 'react';
import './directory-styles.scss';

import MenuItem from '../menuitems/menuitems-component';

const Directory =({title,items}) =>
{

    return(
        <div className="ourmenu">
            <h1>{title.toUpperCase()}</h1>          
             <div className="directory-menu">
                 {items.map(({id ,...otheritemprops})=>{
                     return(
                     <MenuItem key={id} {...otheritemprops} />
               

                 )})}

        </div>
     </div>
    );
}
export default Directory;