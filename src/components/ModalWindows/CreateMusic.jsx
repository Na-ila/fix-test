import React from 'react';
import {observer} from 'mobx-react-lite'
import uniqid from 'uniqid';

import store from '../store/store'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';

const genres = ['RnB', 'Electrohouse', 'Pop']

const CreateMusic = observer(() => {
    const [name, setName] = React.useState('')
    const [selectedGenre, setSelectedGenre] = React.useState('')
    const [error, setError] = React.useState(false)

  const handleClose = () => {
    store.setCreateMusicDialog(false);
  };

  const createMusic = () => {
    if (name === '' || selectedGenre === '') {
        setError(true)
      } else {
        store.addMusic({
            id: uniqid(),
            name,
            genre: selectedGenre
        })
        
        store.setCreateMusicDialog(false);

        setName('')
        setSelectedGenre('')
      }
  }

  return (
    <div>
      <Dialog
        open={store.createMusicDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Добавление нового трека
        </DialogTitle>
        <DialogContent>
            <TextField
                fullWidth
                variant='outlined'
                size='small'
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                    setError(false)
                }}
                label='Название'
                style={{marginTop: 5}}
            />
            <FormGroup>
                {genres.map(genre => (
                    <FormControlLabel key={genre} control={<Checkbox 
                        onChange={() => {
                            setSelectedGenre(genre)
                            setError(false)
                        }}
                        checked={selectedGenre === genre}
                    />} label={genre} />
                ))}
            </FormGroup>
        </DialogContent>
        {error && <Alert severity="error">{name === '' ? 'Название не может быть пустым' : 'Выберите жанр'}</Alert>}
        <DialogActions>
          <Button onClick={createMusic}>Создать</Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
})

export default CreateMusic