import React from 'react';

import './App.css';

function App() {
  
  let [isLit, setLit] = React.useState(true);
  let [number, setNumebr] = React.useState(2)
  let [name, setName] = React.useState('Waqas')
  function change(){
    setNumebr(number*2)
    setLit(!isLit)
    console.log('button clicked')
    
    
    
    
  }
  



  return (
    <div className={`App ${isLit? 'lit':'Dark'}`}>
      
      <p>Name is {name}</p>
      <p>The room is {isLit? 'lit':"Dark"}</p>
      <p>The number is {number}</p>
      <button onClick={change}>Toggle light</button><br/>
      <input
      type="text"
      value={name} 
      onChange={(e)=>{setName(e.target.value)}}>
      


      </input>
    </div>
  );
}

export default App;
