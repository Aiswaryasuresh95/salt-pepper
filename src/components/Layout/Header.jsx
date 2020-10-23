import React from 'react';
import './header.styles.scss';
import '../../logo.png';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import CoustomButton from '../button/coustom-button';
import {Link} from 'react-router-dom';


const Header = () =>
{
  
    return(
    
    <div>
         <header>
              <Link className="option" to="/">
              <img  src={require('../../logo.png')} alt="logo" />
              </Link>
               <div className="options">
                    
                    <div className="menu">
                      <Link className="option" to='/menu'>
                       <MenuBookIcon className="icons" />
                       <p>Our Menu</p>
                       </Link > 
                    </div>
                  
                   
                    <div className="menu">
                      <Link className="option">
                       <WbIncandescentIcon className="icons"/>
                       <p>How it Work</p>
                       </Link>
                    </div>
                    

                    <div className="menu">
                         <Link className="option">
                        <LocalDiningIcon className="icons"/>
                        <p>Meal Plan's </p>
                        </Link>
                    </div>

               </div>
               <div className="buttons">
                     <CoustomButton>Get Start</CoustomButton>
                     <button className="logbutton">
                          Log In
                     </button>
               </div>

         </header>
    </div>
    )
}
export default Header;