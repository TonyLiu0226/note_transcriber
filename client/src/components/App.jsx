import React, { useState } from "react";
import { Button, ButtonGroup, TextField, AppBar, Toolbar } from 'react-bootstrap';
import Counter from './Counter';
import axios from 'axios'; 
import './Form.css';
import { useEffect } from "react";
import ImageList from "./ImageList";
import { CssBaseline } from '@mui/material'
 
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.imageFile = "bruh";
    const {UpdateImageFile} = this.props;
    this.UpdateImageFile = UpdateImageFile;
  }

  f(g) {
    console.log(g)
  }

  handleSubmit(event) {
    event.preventDefault();
    let file = this.fileInput.current.files[0];
    const formData = new FormData();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
    // put event handling code below
    formData.append("file", file);
    axios({
      method: "post",
      url: "http://127.0.0.1:5000/login",
      data: formData,
    })
      .then((response) => {
        //handle success
        console.log(response.data)
        this.UpdateImageFile(response.data);
        // response.json().then((body) => {
        //   console.log(response);
        // });
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit" className="btn btn-default btn-lg">
          Upload file:
          <input type="file" ref={this.fileInput} />
        </button>
      </form>
    );
  }
}

export default function App(props) {
  // const [isAuto,setIsAuto] = useState(false);
  // const toggleAuto = (e) => {
  //     e.preventDefault();
     
  //     setIsAuto(prev => !prev);
  // }
  const [imageFile, setImageFile] = useState('bruh');
  const [uploadInput,setUploadInput] = useState();
  const [data,setData] = useState(new FormData());
  
  function UpdateImageFile(bruh) {
    setImageFile(bruh);

  }
  
 
  function flipPage(e) {
    e.preventDefault();
    axios
    .get('http://127.0.0.1:5000/turnpage')
    .then(resp => {
        console.log(resp.data);
    });
  }

  // function getPhoto(e) {
  //   e.preventDefault();
  //   setData(prev => [
  //     ...prev,
  //     uploadInput.files[0]
  //   ]);
  //   axios({
  //     method: "post",
  //     url: "http://127.0.0.1:5000/login",
  //     data: data,
  //   })
  //     .then(function (response) {
  //       //handle success
  //       console.log(response);
  //       response.json().then((body) => {
  //         this.setImageFile(`http://127.0.0.1:5000/${body.file}`);
  //       });
  //     })
  //     .catch(function (response) {
  //       //handle error
  //       console.err(response);
  //     });
  // }
return (
  <>
  <CssBaseline />
  <ImageList />
  <div className="auth-form">
    <div className="container">
      <h2>Actions</h2>
      <br></br>
      <div className= "bruh">
        <div className="form-group">
          <FileInput UpdateImageFile={UpdateImageFile}></FileInput>
        </div>
      <form className="main">
        <div className="form-group">
          <button type="submit" className="btn btn-default btn-lg" id="bt" onClick={flipPage}>Flip page</button>
        </div>
      </form>
      <form className="main">
        <div className="form-group">
          <button type="submit" className="btn btn-default btn-lg" id="bt">Submit</button>
          
        </div>
      </form>
    </div>
    <br/>
    <div class="paragraph">
      <h1>TEXT PREVIEW:</h1>
      <br/>
      <p>{imageFile}</p>
    </div>
    </div>
    <div>
      <Counter></Counter>
    </div>
  </div>
  </>
)
}
 

