import {useRef, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Fetch from './components/Fetch';

function App() {

  // const [first, setfirst] = useState(" ")

  // const clearInput = (e)=>{
  //   setfirst(" ")
  // }

  // const nameInput  =useRef(null)

  // const clearInput = (e)=>{
  //   nameInput.current.value = ""
  // }


  return (
    <div className="App">
      {/* <input type="text" ref={nameInput}/>
      <button type="submit" onClick={clearInput}>Submit</button> */}
      <Fetch></Fetch>
    </div>
  );
}

export default App;
