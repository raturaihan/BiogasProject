import styled from 'styled-components'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

export default function MaterialUIPickers(onDateChanged) {
  console.log(onDateChanged);
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
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
  );
}

const PilihTanggal=styled.div`
    margin: 30px;
    position: "relative";
    z-Index: 2000;
`;
