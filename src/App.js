// libraries
import React from 'react';


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
      <>
        <Home/>
      </>
    )
  }
}



export default App;
