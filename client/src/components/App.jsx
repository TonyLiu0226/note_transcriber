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
//   const {setToken, isLogin} = props;
//   const [userInfo, setUserInfo] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//     notes: []
//   });
 
//   function handleChange(event) {
//     const { name, value } = event.target;
//     setUserInfo((prev) => {
//       return {
//         ...prev,
//         [name]: value
//       }
//     });
//   }
 
  function submit(e) {
    e.preventDefault();
    var data = new FormData();
    data.append('image', 'cpee.jpg');

    if (props.isLogin) {
      axios({
        method: "post",
        url: "http://cpen291-11.ece.ubc.ca/login",
        data: data,
        headers: { "Content-Type": "form-data" },
      })
      .then((res) => {
        return (<p>bruh</p>)
      })
      .catch(err => {
        console.error(err);
      });
    } else {
      axios({
        method: "post",
        url: "myurl",
        data: data,
        headers: { "Content-Type": "form-data" },
      })
        .then((res) => console.log(res))
        .catch(err => {
          console.error(err);
        });
    }
  }

return (
  <>
  {<div className="auth-form">
  <div className="container">
  <h2>Actions</h2>
  <br></br>
  <form className="main" onSubmit={this.submit} method="post">
    <div className="form-group">
     
        <button variant="contained" className="btn btn-default btn-lg" component="span" id="bt">TAKE PHOTO
        <input type="file" accept="image/*" id="file_uploader"/>
        </button>
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-default btn-lg" id="bt">Flip page</button>
    </div>
    <button type="submit" className="btn btn-default btn-lg" id="bt">Submit</button>
  </form>
</div>
  <div>
    <Counter></Counter>
  </div>
  </div>}
  </>
)
}
 

