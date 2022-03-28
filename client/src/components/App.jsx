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
  const [imageFile, setImageFile] = useState('');
  const [data,setData] = useState(new FormData());
  useEffect(()=> {
    getPhoto = getPhoto.bind()
    },[]);


 
  function flipPage(e) {
    e.preventDefault();
    axios
    .get('http://127.0.0.1:5000/turnpage')
    .then(resp => {
        console.log(resp.data);
    });
  }

  function getPhoto(e) {
    e.preventDefault();
    setData(prev => 'image', this.uploadInput.files[0]);
    axios({
      method: "post",
      url: "http://127.0.0.1:5000/login",
      data: data
    })
      .then(function (response) {
        //handle success
        console.log(response);
        response.json().then((body) => {
          this.setState({ imageFile: `http://127.0.0.1:5000/${body.file}` });
        });
      })
      .catch(function (response) {
        //handle error
        console.err(response);
      });
  }
return (
  <>
  <div className="auth-form">
    <div className="container">
      <h2>Actions</h2>
      <br></br>
      <form className="main" onSubmit={getPhoto}>
        <div className="form-group">
        
            <button variant="contained" className="btn btn-default btn-lg" component="span" id="bt">TAKE PHOTO
            <input ref={(ref) => {this.uploadInput = ref; }} type="file" />
            </button>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default btn-lg" id="bt" onClick={flipPage}>Flip page</button>
        </div>
        <button type="submit" className="btn btn-default btn-lg" id="bt">Submit</button>
        <img src={imageFile} alt="img" />
      </form>
    </div>
    <div>
      <Counter></Counter>
    </div>
  </div>
  </>
)
}
 

