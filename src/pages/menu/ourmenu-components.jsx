import React from 'react';
import './ourmenu-styles.scss';
import Directory from '../../components/directory/directory-component';




const OurMenu = ()=>
{
    return(
        <div className="ourmenu">
            <h1>Select On Your Preference  </h1>
            <Directory />
            <h1>kereala cusines meal plans</h1>
            <Directory/>
        </div>
    )
}

export default OurMenu;