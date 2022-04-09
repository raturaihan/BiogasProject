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
          format: (value) => value > 35 || value <20 ? <RedText>{value.toFixed(2)}</RedText> : value.toFixed(2),
        },
        {
          id: 'phValue',
          label: 'pH\u00a0Slurry',
          width: 100,
          align: 'right',
          format: (value) => value > 8.2 || value < 6.2 ? <RedText>{value.toFixed(2)}</RedText> : value.toFixed(2),
        },
        {
          id: 'pressureValue',
          label: 'Tekanan\u00a0Gas',
          width: 100,
          align: 'right',
          format: (value) => value < 0 || value > 7845 ? <RedText>{value.toFixed(2)}</RedText> : value.toFixed(2),
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
                                  <div>Suhu Normal: 20 - 35 C </div>
                                  <div>pH Normal: 6.2 - 8.2</div>
                                  <div>Tekanan Gas Normal: 0 - 7845 Pa</div>
                                </div>}enterTouchDelay={0}>
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
  box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
  -webkit-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
  background-color: #F9FCF8;
  @media (max-width: 767px){
    margin: 30px 30px;
    padding: 10px;
  }
`;

const DataInfo=styled.div`
  right: 25px;
`;

const TableTitle=styled.h3`
  text-align: center;
  width:100%;
  z-index: 5;
`;
