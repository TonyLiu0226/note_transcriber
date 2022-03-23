import React, { useState } from "react";
import { FormControl, Button, TextField } from '@mui/material';
import './Form.css';
import { useEffect } from "react";



function sayHello(){
  return <div>
    <h1>"hello"</h1>
  </div>
  
}

function Counter() {
  const [count, setCount] = useState(0)
  var text = document.getElementById("bruv");
  useEffect(() => {
    document.title = `${count} clicks`
  }, [count])
  return <div>
    <p1>{count}</p1>
    <button onClick={() => setCount(count + 1) }>
        Click me lol
        
      </button>
  </div>
}

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
        onClick={sayHello} 
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
  <div>
      <Counter></Counter>
    </div>
  </div>
)
}
/*need to :
- display preview of scanned pages and offer download option

*/