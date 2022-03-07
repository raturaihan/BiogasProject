import React from 'react'
import {Grid,Paper,Typography,Link} from '@material-ui/core'
import {Nav} from "../navbar"
import styled from 'styled-components';

const Signup=()=>{
    const paperStyle={padding:20, height:'62.5vh',width:355,margin:"5px auto"}
    const backgroundStyle={backgroundColor:'#cbe8ba',padding:10, height:'70vh',width:'100%',margin:"10px auto"}
    return(
        <Grid>
        <Nav>
            <h1 style={{FontSize:'30px'}}>SmartBiogas</h1>
        </Nav> 
        <BackgroundStyle>
            <PaperStyle>
                <Grid align='center' >
                    <h2>Cara Mendapatkan ID</h2>
                </Grid>
                <h4>1. ID hanya didapatkan pada produk yang sudah dibeli</h4>
                <h4>2. Produk yang diterima akan dilengkapi ID beserta passwordnya</h4>
                <h4>3. ID dan password bersifat rahasia dan tidak dapat diubah</h4>
                <Typography>Sudah punya ID?
                    <Link href="/"> Masuk Akun
                    </Link>
                </Typography>
            </PaperStyle>
        </BackgroundStyle>
        </Grid>
    )
}

export default Signup;

const PaperStyle = styled.div`
  height: 390px;
  width: 355px;
  padding: 20px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  -webkit-box-shadow: -1px -1px 9px -2px #000000; 
  box-shadow: -1px -1px 3px -2px #000000;
  @media (max-width: 1023px){
    background-color: white;
    height: 300px;
    width: 255px;
    margin-left: auto;
    margin-right: auto;
  }
`
const BackgroundStyle = styled.div`
    background-color:#cbe8ba;
    padding:10;
    height:432px;
    width:100%;
    margin:0px auto;
    @media (max-width: 1023px){
        background-color: #cbe8ba;
        height: 1000px;
        width: 100%;
     }
`