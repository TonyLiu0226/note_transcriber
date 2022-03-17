import React, { useState } from "react";
import { FormControl, Button, TextField } from '@mui/material';
import './Form.css';

export default function App(props) {
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
    <div className="auth-form">
    <form className="">
      <FormControl fullWidth={true}>
      <Button
        variant="contained"
        component="label"
        color="secondary"
        >
        <input
            type="file"
        />
        </Button>
        {!isAuto &&
        <Button 
          type="submit" 
          variant="contained" 
          sx={{my:1}}>Flip Page
        </Button>
    }
        <Button 
          type="submit" 
          variant="contained" 
          sx={{my:1}}
          onClick={toggleAuto}
        >Auto
        </Button>
        <Button 
          type="submit" 
          variant="contained" 
          sx={{my:1}}>Submit
        </Button>
      </FormControl>
    </form>
    </div>
    
  )
}