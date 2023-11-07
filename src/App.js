import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App =() =>{

let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
const [ctime, setCtime] = useState(time);

const UpdateTime = ()=> {
  let time = new Date().toLocaleTimeString();
  setCtime(time);
};

setInterval(UpdateTime,1000);


  return(
    <center>
      <div class="q">
        <h1>D I G I T A L    C L O C K</h1>
      </div>
    <div class="i">
    <h1>
      {date}
      <br></br>
      {ctime}
    </h1>
    </div>
    </center>
  )
  }

export default App;
