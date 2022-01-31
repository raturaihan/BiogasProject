import React from 'react' 
import {Grid,Paper,TextField,Button, Typography,Link} from '@material-ui/core'
import styled from 'styled-components';
import bgImg from '../../asset/image.JPEG'
import {Nav} from "../navbar"
import axios from 'axios'
import ReactDOM from "react-dom";

class Login extends React.Component {
    constructor(){
      super();
      this.state={
        ID: '',
        Password: ''
      }
    }  
    onChange =(e) =>{
      this.setState({
        [e.target.id]:e.target.value
      })
    }
    onSubmit=()=>{
      let data ={
        ID: this.state.ID,
        Password: this.state.Password
      }

      axios.get('https://jsonplaceholder.typicode.com/posts',data)
      .then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }

    render(){
        const paperStyle={backgroundColor:'#cbe8ba',padding:20, height:'62.5vh',width:355,margin:"8px 0px"}
        const btnStyle={margin:"8px 0"}
        return(
            <Grid>
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
                    fullWidth label="ID" 
                    onChange={this.onChange}
                    placeholder='Masukan ID Anda'
                    variant="outlined"
                    size='small'></TextField></Grid>
                    <Grid item>
                    <TextField 
                    fullWidth label="Password" 
                    onChange={this.onChange}
                    placeholder='Masukan Password Anda'
                    variant="outlined"
                    type='password'
                    size='small'></TextField>
                    </Grid>
                    <Button type='submit' sx={{color:"green"}} variant='contained' style={btnStyle} onClick={this.onSubmit}>Masuk</Button>
                    <Typography>Belum ada ID?
                        <Link href="/signup"> Info
                        </Link>
                    </Typography>
                    </Grid>
                </Paper>
            </Wrapper>
            </Grid> 
        )
    }
}

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-attachment: fixed;
  background-size: cover;
  backgroundPosition: 'right center';
  background-repeat: no-repeat;
  width: 1360px;
  height: 450px;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
export default Login;