import React from 'react';
import{Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
import HomePage from './pages/home/homapage';

function App() {
  return (
    <div className="App">

        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        
        
    </div>
  );
}

export default App;
