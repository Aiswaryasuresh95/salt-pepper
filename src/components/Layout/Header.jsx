import React from 'react';
import './header.styles.scss';
import '../../logo.png';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import CoustomButton from '../button/coustom-button';


const Header = () =>
{
  
    return(
    
    <div>
         <header>
              <img  src={require('../../logo.png')} alt="logo" />
               <div className="options">
                    <div className="menu">
                       <MenuBookIcon className="icons" />
                       <p className="option">Our Menu</p>
                    </div>

                    <div className="menu">
                       <WbIncandescentIcon className="icons"/>
                       <p className="option">How it Work</p>
                    </div>

                    <div className="menu">
                        <LocalDiningIcon className="icons"/>
                        <p className="option">Meal Plan's </p>
                    </div>

               </div>
               <div className="buttons">
                     <CoustomButton>Pick a Meal</CoustomButton>
                     <button className="logbutton">
                          Log In
                     </button>
               </div>

         </header>
    </div>
    )
}
export default Header;