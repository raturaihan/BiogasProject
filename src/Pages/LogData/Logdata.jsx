import styled from 'styled-components'
import Tabel from "../../components/Tabel/Tabel"
import Nav from '../../components/navbar/index'
import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import * as React from 'react';
import { Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
  
  const PilihTanggal=styled.div`
      margin: 30px;
      position: "relative";
      z-Index: 2000;
  `;
  

const Logdata=()=>{
    const [value, setValue] = React.useState(new Date());
  
    const handleChange = (value) => {
      setValue(value);
      setIsFetched(false);
    };

    // console.log('tes masuk logdata');
    // console.log(value);
    const [isFetched, setIsFetched] = useState(false);
    const [dataParameter, setDataParameter] = useState([]);

    const fetchData=(value)=>{
        const state=localStorage.getItem('dev_id');
        // console.log(state);

        axios.post('https://ehy3b0lyhk.execute-api.us-east-1.amazonaws.com/release/logdatabiogas', JSON.stringify({
            "device_id": state,
            "date" : moment(value).format('YYYY-MM-DD')
            }))
            .then((res)=>{
                if(res.data !== undefined) {
                //  console.log(res.data);
                //  console.log("test");
                 setDataParameter(res.data);
                 setIsFetched(true);
                }
             })
            .catch((err)=>{
                //  console.log(err.response.data);
            })
    }

    useEffect(()=>{
        if(!isFetched) {
            fetchData(value);
        }
    },[isFetched]);
    
    return (
        <div>
            <Nav />
            <Log>
            <PilihTanggal>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                    label="Masukan Tanggal"
                    inputFormat="yyyy-MM-dd"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
            </PilihTanggal>
                {dataParameter.length !==0 ? <Tabel data={dataParameter} />
                : <Alert severity='error'>Data Tidak Ditemukan! Silahkan Pilih Tanggal Lain</Alert>}
            </Log>
        </div>
    )
 }

 const Log = styled.div`
    flex:4;
 `;

 export default Logdata;