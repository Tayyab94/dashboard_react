import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const makeStyle = (fat) => {
    if (fat > 300) {
        return {
            background: "rgb(145 254 159/47%)",
            color: 'green',
        }
    } else if (fat >= 250 && fat < 300) {
        return {
            background: "#ffadad8f",
            color: 'red'
        }
    } else {
        return {
            background: "#59bfff",
            color: 'white'
        }
    }
}
export default function TableView() {


    return (
        <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align="left">Calories</StyledTableCell>
                        <StyledTableCell align="left">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="left">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="left">Protein&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                <span style={(makeStyle(row.calories))} className='status'>{row.name}</span>
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.calories}</StyledTableCell>
                            <StyledTableCell align="left" ></StyledTableCell>
                            <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}