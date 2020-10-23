import React from 'react';
import './directory-styles.scss';
import MenuData from '../../constants/menupage';
import MenuItem from '../menuitems/menuitems-component';

const Directory =() =>
{

    return(
        <div className="directory-menu">
            {MenuData.map(({id ,...othersectionprops}) =>(
                <MenuItem key={id} {...othersectionprops} />
            )
                )}
        </div>
    )
}
export default Directory;