import React from 'react';
import './header.styles.scss';
import '../../logo.png';


const Header = () =>
{
  
    return(
    
    <div>
         <header>
              <img  src={require('../../logo.png')} alt="logo" />
              <ul>
                  <li>REcips</li>
                   <li>show</li>
              </ul>

         </header>
    </div>
    )
}
export default Header;