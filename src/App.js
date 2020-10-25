import React from 'react';
import{Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
import HomePage from './pages/home/homapage';
import OurMenu from './pages/menu/ourmenu-components';
import SignIn from './pages/sign-in/signin-component';

function App() {
  return (
    <div className="App">

        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/menu' component={OurMenu}/>
          <Route exact path='/signin' component={SignIn}/>
        </Switch>
        
        
    </div>
  );
}

export default App;
