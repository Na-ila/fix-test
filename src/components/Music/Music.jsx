import * as React from 'react';
import {observer} from 'mobx-react-lite'

import store from '../store/store'
import DeleteDialog from '../ModalWindows/DeleteDialog'

import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';

const useStyles = makeStyles(theme => ({
    tableContainer: {
        maxHeight: '30vh',
    },
    tableHead: {
        '& th': {
            backgroundColor: blue[600],
            color: 'white',
            fontWeight: 'bold'
        }
    }
}))

const Music = observer(() => {
    const classes = useStyles()

    const deleteMusic = (music) => {
        store.setDeleteDialog(true);
        store.setDeleteDialogText({
            id: 'music',
            text: 'Вы уверены, что хотите удалить этот трек?',
            btn: 'Удалить'
        })
        store.setSelectedMusic(music);
    }
    
  return (
    <>
        <DeleteDialog/>
        <TableContainer className={classes.tableContainer} component={Paper}>
        <Table size='small' stickyHeader sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead className={classes.tableHead}>
            <TableRow>
                <TableCell>Имя</TableCell>
                <TableCell align="center">Жанр</TableCell>
                <TableCell style={{width: '20px'}}/>
            </TableRow>
            </TableHead>
            <TableBody>
            {store.musicList.filter(item => store.selectedGenre !== 'all' ? item.genre === store.selectedGenre : item).map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.genre}</TableCell>
                <TableCell style={{width: '20px'}}>
                    <IconButton aria-label="delete" onClick={() => deleteMusic(row)}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </>
  );
})

export default Music