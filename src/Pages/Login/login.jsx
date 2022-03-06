import {Grid,Paper,TextField,Button, Typography,Link} from '@material-ui/core';
import { Alert } from '@mui/material';
import styled from 'styled-components';
import {Nav} from "../navbar";
import axios from 'axios';

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  function validateForm() {
    return id.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('https://ehy3b0lyhk.execute-api.us-east-1.amazonaws.com/release/loginbiogas',JSON.stringify({
      "device_id": id,
      "password": password
    }))
    .then((res)=>{
      // console.log(res.data.payload)
      if(res.data.payload === 1){// if id and password matches
        // navigate to graphic page, save device id as state
        navigate('/graphic', { state: id }); 
        localStorage.setItem('dev_id', id);
        // no alert
        setAlert(false);
      }
      else{// if incorrect password
        // alert the user
        setAlert(true);
      }
    })
    .catch((err)=>{ // if error (id not found or the sort)
      // console.log(err.response.data);
      // alert the user
      setAlert(true);
    })
  }

  return(
    <Grid>
    {alert ? <Alert severity='error'>Password atau ID Salah! Silahkan Coba Lagi</Alert> : <></> }
    <Nav>
      <h1>SmartBiogas</h1>
    </Nav> 
    <Wrapper >
      <Paper elevation={8} style={paperStyle}>
        <Grid align='center' >
          <h2>Masuk Akun</h2>
        </Grid>
        <Grid container direction={"column"} spacing={3}>
        <Grid item>
        <TextField 
          fullWidth
          label="ID" 
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder='Masukan ID Anda'
          variant="outlined"
          size='small'
        />
        </Grid>
        <Grid item>
        <TextField 
          fullWidth 
          label="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Masukan Password Anda'
          variant="outlined"
          type='password'
          size='small'
        />
        </Grid>
        <Button 
          type='submit' 
          sx={{color:"green"}} 
          variant='contained' 
          style={btnStyle} 
          onClick={handleSubmit}
          disabled={!validateForm()}
        >Masuk</Button>
        <Typography>Belum ada ID?
          <Link href="/info"> Info
          </Link>
        </Typography>
        </Grid>
      </Paper>
    </Wrapper>
    </Grid> 
  );
}


const Wrapper = styled.div`
  background-image: url("https://frontendimages014.s3.ap-southeast-1.amazonaws.com/image.JPEG");
  background-attachment: fixed;
  background-size: cover;
  backgroundPosition: 'right center';
  background-repeat: no-repeat;
  width: 1360px;
  height: 450px;
`;

const paperStyle={backgroundColor:'#cbe8ba',padding:20, height:'66.5vh',width:355,margin:"8px 0px"}
const btnStyle={margin:"8px 0"}