import React, { useState } from "react";
import { Button, ButtonGroup, TextField, AppBar, Toolbar } from 'react-bootstrap';
import Counter from './Counter';

import './Form.css';
import { useEffect } from "react";



export default function App(props) {
  
  function sayHello(){
    return <div>
      <h1>"hello"</h1>
    </div>
    
  }

  


  const [isAuto,setIsAuto] = useState(false);

  const toggleAuto = (e) => {
      e.preventDefault();
      
      setIsAuto(prev => !prev);
  }
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

//   function submit(e) {
//     e.preventDefault();
//     if (props.isLogin) {
//       axios
//       .post('http://localhost:4000/api/login', userInfo)
//       .then((res) => {
//         return (<Navigate to="/" />)
//       })
//       .catch(err => {
//         console.error(err);
//       });
//     } else {
//       axios
//         .post('http://localhost:4000/api/register', userInfo)
//         .then((res) => console.log(res))
//         .catch(err => {
//           console.error(err);
//         });
//     }
//   }
return (
  <>
  {<div className="auth-form">
  <div class="container">
  <h2>Actions</h2>
  <br></br>
  <form class="main" action="/action_page.php">
    <div class="form-group">
      <button type="submit" class="btn btn-default btn-lg" id="bt">Take Photo</button>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-default btn-lg" id="bt">Flip page</button>
    </div>
    <button type="submit" class="btn btn-default btn-lg" id="bt">Submit</button>
  </form>
</div>
  <div>
    <Counter></Counter>
  </div>
  </div>}
  </>
)
}
