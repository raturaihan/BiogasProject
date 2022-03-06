import styled from 'styled-components'
import * as React from 'react';
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow, Typography} from '@mui/material';
import {Grid, Tooltip} from "@material-ui/core"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { withStyles } from "@material-ui/core/styles";


const RedText = withStyles({
  root: {
    color: "red",
    fontStyle: "bold"
  }
})(Typography);

export default function Tabel({data}) {
  console.log(data);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

    function formatDate(string){
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const columns = [
        { id: 'time', 
          label: 'Tanggal', 
          width: 100 , 
          format: (value) => formatDate(value.slice(0,10))
        },
        { id: 'time', 
          label: 'Waktu', 
          width: 100,
          format: (value) => value.slice(11,16)
         },
        {
          id: 'temperatureValue',
          label: 'Suhu\u00a0Slurry',
          width: 100,
          align: 'right',
          format: (value) => value > 35 || value <25 ? <RedText>{value}</RedText> : value,
        },
        {
          id: 'phValue',
          label: 'pH\u00a0Slurry',
          width: 100,
          align: 'right',
          format: (value) => value > 7 || value < 6.8 ? <RedText>{value}</RedText> : value,
        },
        {
          id: 'pressureValue',
          label: 'Tekanan\u00a0Gas',
          width: 100,
          align: 'right',
          format: (value) => value > 2800 ? <RedText>{value}</RedText> : value,
        },
      ];
      
    return (
        <div className="Tabel">
            <DataLog>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <item><TableTitle>Data Historis</TableTitle></item>
              </Grid>
              <item>
              <DataInfo>
                <Tooltip title={<div>
                                  <div>Suhu Normal: 25 - 35 C </div>
                                  <div>pH Normal: 6.8 - 7</div>
                                  <div>Tekanan Gas Normal: 0 - 2800 Pa</div>
                                </div>}>
                <InfoOutlinedIcon color="disabled" />
                </Tooltip>
              </DataInfo></item>
            </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
              <TableHead>
                  <TableRow>
                  {columns.map((column) => (
                      <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      >
                      {column.label}
                      </TableCell>
                  ))}
                  </TableRow>
              </TableHead>
              <TableBody>
                  {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                      return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                          const value = row["device_data"][column.id];
                          return (
                              <TableCell key={column.id} align={column.align}>
                              {column.format
                                  ? column.format(value)
                                  : value}
                              {/* {value} */}
                              </TableCell>
                          );
                          })}
                      </TableRow>
                      );
                  })}
              </TableBody>
              </Table>
          </TableContainer>
          <TablePagination
              rowsPerPageOptions={[10, 25]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
          </Paper>     
          </DataLog>
    </div>
    )
}

const DataLog=styled.div`
  margin: 30px 78px;
  padding: 20px;
  -webkit-box-shadow: -1px -1px 9px -2px #000000; 
  box-shadow: -1px -1px 9px -2px #000000;
`;

const DataInfo=styled.div`
  right: 25px;
`;

const TableTitle=styled.h3`
  text-align: center;
  width:100%;
  z-index: 5;
`;
