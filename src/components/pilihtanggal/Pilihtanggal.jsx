import styled from 'styled-components'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {IconButton} from '@material-ui/core'

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <PilihTanggal>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Masukan Tanggal"
              inputFormat="yyyy/MM/dd"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
      <IconButton aria-label="manage search icon" size="large">
        <ManageSearchIcon />
      </IconButton>
    </PilihTanggal>
  );
}

const PilihTanggal=styled.div`
    margin: 30px;
    position: "relative";
    z-Index: 2000;
`;
