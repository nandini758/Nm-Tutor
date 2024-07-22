import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Main from './MyComponent/Main';
import Register from './MyComponent/Register';
import Thank from './MyComponent/Thank';
function App(){
  return(
    <div className="main">
      <Routes>
        <Route path='/' Component={Main}/>
        <Route path='/Register' Component={Register}/>
        <Route path='/Thankyou' Component={Thank}/>
       
      </Routes>
    </div>
  );
}

export default App;