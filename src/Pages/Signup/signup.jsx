import React from 'react'
import {Grid,Paper,Typography,Link} from '@material-ui/core'
import {Nav} from "../navbar"

const Signup=()=>{
    const paperStyle={padding:20, height:'62.5vh',width:355,margin:"5px auto"}
    const backgroundStyle={backgroundColor:'#cbe8ba',padding:10, height:'70vh',width:'100%',margin:"10px auto"}
    return(
        <Grid>
        <Nav>
            <h1 style={{FontSize:'30px'}}>SmartBiogas</h1>
        </Nav> 
        <Paper elevation={0} style={backgroundStyle}>
            <Paper elevation={8} style={paperStyle}>
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
            </Paper>
        </Paper>
        </Grid>
    )
}

export default Signup;