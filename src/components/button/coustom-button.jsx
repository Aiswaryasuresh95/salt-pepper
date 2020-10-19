import React from 'react';
import './coustombutton-styles.scss';


const CoustomButton =({children}) =>
{
    return(
    <button className="coustom-button">
       {children}
    </button>
    )
} 

export default CoustomButton;