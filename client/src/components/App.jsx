import React, { useState } from "react";
import { Button, ButtonGroup, TextField, AppBar, Toolbar } from 'react-bootstrap';
import Counter from './Counter';
import axios from 'axios';
 
import './Form.css';
import { useEffect } from "react";
 
 
 
export default function App(props) {
  // const [isAuto,setIsAuto] = useState(false);
  // const toggleAuto = (e) => {
  //     e.preventDefault();
     
  //     setIsAuto(prev => !prev);
  // }
 
  function flipPage(e) {
    e.preventDefault();
    axios
    .get('http://127.0.0.1:5000/turnpage')
    .then(resp => {
        console.log(resp.data);
    });
  }
return (
  <>
  <div className="auth-form">
    <div className="container">
      <h2>Actions</h2>
      <br></br>
      <form className="main" action="/action_page.php" method="post">
        <div className="form-group">
        
            <button variant="contained" className="btn btn-default btn-lg" component="span" id="bt">TAKE PHOTO
            <input type="file" accept="image/*" id="file_uploader"/>
            </button>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default btn-lg" id="bt" onClick={flipPage}>Flip page</button>
        </div>
        <button type="submit" className="btn btn-default btn-lg" id="bt">Submit</button>
      </form>
    </div>
    <div>
      <Counter></Counter>
    </div>
  </div>
  </>
)
}
 

