import React from 'react';
import './ourmenu-styles.scss';
import Directory from '../../components/directory/directory-component';
import MenuData from '../../components/menuitems/menupage';





const OurMenu = ()=>
{
    return(
        <div>
            {MenuData.map(({id ,...othersectionprops}) =>(
                <Directory key={id} {...othersectionprops} />
            )
                )}
            
        </div>
    )
}

export default OurMenu;