import React from 'react';
import { Button, Grid } from '@mui/material';
import axios from 'axios'; 


class FileInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
      this.setConvertedText = this.props.setConvertedText;
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
          this.setConvertedText(response.data);
          // response.json().then((body) => {
          //   console.log(response);
          // });
        })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md="auto">
              <Button
                variant="outlined"
                component="label"
                sx={{ height: "37px"}}
              >
                <input
                  type="file"
                  ref={this.fileInput}
                />
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md="auto">
              <Button variant="contained" type="submit">Submit</Button>
            </Grid>
        </Grid>
        </form>
      );
    }
  }

export default FileInput;