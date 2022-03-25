import React, {useEffect, useState} from 'react'
import { FormControl, Button, TextField, AppBar, Toolbar } from 'react-bootstrap';

function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
      document.title = `${count} clicks`
    }, [count])
    return <div>
      <p>{count}</p>
      <Button id="bb" onClick={() => setCount(count + 1) }>
          
        </Button>
    </div>
  }

  export default Counter