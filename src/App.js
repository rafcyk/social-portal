// libraries
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// styles
import './styles/app.css';
import './styles/media.css';

//pages
import Home from './pages/Home';

//components

class App extends React.Component{
  state = {

  }

  render(){
    return(
      <Router>
        <Home/>
      </Router>
    )
  }
}



export default App;
