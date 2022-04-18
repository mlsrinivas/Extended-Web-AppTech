import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));
    
const Home = () => {

    const navigate = useNavigate()
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
        .then(res => res.json())
        .then(data => setTableData(data.hits));
    }, [])

    const handleShowItem = (row) => {
        navigate('/user', {state: row})
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Welcome</h1>
            <div style={{padding: 30}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell >Url</StyledTableCell>
                        <StyledTableCell >Created at</StyledTableCell>
                        <StyledTableCell >Author</StyledTableCell>
                        <StyledTableCell ></StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tableData.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell >{row.title == null ? '-' : row.title}</StyledTableCell>
                        <StyledTableCell >{row.url == null ? '-' : row.url}</StyledTableCell>
                        <StyledTableCell >{row.created_at == null ? '-' : row.created_at}</StyledTableCell>
                        <StyledTableCell >{row.author == null ? '-' : row.author}</StyledTableCell>
                        <StyledTableCell onClick={() => handleShowItem(row)} style={{cursor:'pointer'}}>{<ChevronRightIcon />}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}

export default Home;
