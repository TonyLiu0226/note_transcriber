import React, {useEffect, useState} from 'react'
import { FormControl, Button, TextField, AppBar, Toolbar } from 'react-bootstrap';

function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
      document.title = `${count} clicks`
    }, [count])
    return <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1) }>
          Click me lol
          
        </Button>
    </div>
  }

  export default Counter