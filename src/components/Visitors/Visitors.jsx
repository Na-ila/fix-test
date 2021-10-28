import * as React from 'react';
import {observer} from 'mobx-react-lite'

import {isMatch} from '../App/utils'
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
import { blue, red, lightGreen } from '@mui/material/colors';

const useStyles = makeStyles(theme => ({
    tableContainer: {
        maxHeight: '90vh',
    },
    tableHead: {
        '& th': {
            backgroundColor: blue[600],
            color: 'white',
            fontWeight: 'bold'
        }
    }
}))

const Visitors = observer(() => {
    const classes = useStyles()

    const deleteVisitor = (visitor) => {
        store.setDeleteDialogText({
            id: 'visitor',
            text: 'Вы уверены, что хотите вывести его из клуба?',
            btn: 'Вывести'
        })
        store.setDeleteDialog(true);
        store.setSelectedVisitor(visitor);
    }
    
  return (
    <>
        <DeleteDialog/>
        <TableContainer className={classes.tableContainer} component={Paper}>
        <Table size='small' stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={classes.tableHead}>
            <TableRow>
                <TableCell>Имя</TableCell>
                <TableCell align="center">RnB</TableCell>
                <TableCell align="center">Hip-hop</TableCell>
                <TableCell align="center">Electrodance</TableCell>
                <TableCell align="center">House</TableCell>
                <TableCell align="center">Pop</TableCell>
                <TableCell style={{width: '20px'}}/>
            </TableRow>
            </TableHead>
            <TableBody>
            {store.visitorList.filter(item => store.selectedPlace !== 'all' ? store.selectedPlace === 'scene' ? isMatch(store.dance[store.selectedMusicToPlay.genre], item.skills).length > 0 : isMatch(store.dance[store.selectedMusicToPlay.genre], item.skills).length === 0 : item).map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.skills.includes('RnB') ? '+' : '-'}</TableCell>
                <TableCell align="center">{row.skills.includes('Hip-hop') ? '+' : '-'}</TableCell>
                <TableCell align="center">{row.skills.includes('Electrodance') ? '+' : '-'}</TableCell>
                <TableCell align="center">{row.skills.includes('House') ? '+' : '-'}</TableCell>
                <TableCell align="center">{row.skills.includes('Pop') ? '+' : '-'}</TableCell>
                <TableCell style={{width: '20px'}}>
                    <IconButton aria-label="delete" onClick={() => deleteVisitor(row)}>
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

export default Visitors