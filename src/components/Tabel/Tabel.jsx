import styled from 'styled-components'
import * as React from 'react';
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow} from '@mui/material';
import {Grid, Tooltip} from "@material-ui/core"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Tabel() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const columns = [
        { id: 'tanggal', label: 'Tanggal', minWidth: 170 },
        { id: 'waktu', label: 'Waktu', minWidth: 100 },
        {
          id: 'suhu',
          label: 'Suhu\u00a0Slurry',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'pH',
          label: 'pH\u00a0Slurry',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'tekanan',
          label: 'Tekanan\u00a0Gas',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toFixed(2),
        },
      ];
      
      function createData(tanggal, waktu, suhu, pH, tekanan) {
        return { tanggal, waktu, suhu, pH, tekanan,};
      }
      
      const rows = [
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
        createData('21 November 2021', '13.00', 29.8, 6.8, 2000),
      ];
      
    return (
        <div ClassName="Tabel">
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
                                  <div>Tekanan Gas Normal: 0 - 2.8 KPa</div>
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
                  {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                      return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                          const value = row[column.id];
                          return (
                              <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
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
              count={rows.length}
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
