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

const defaultSkills = {
  "RnB": false,
  "Hip-hop": false,
  "Electrodance": false,
  "House": false,
  "Pop": false,
}

const CreateVisitor = observer(() => {
    const [name, setName] = React.useState('')
    const [skills, setSkills] = React.useState(defaultSkills)
    const [error, setError] = React.useState(false)

  const handleClose = () => {
    store.setCreateVisitorDialog(false);
  };

  const createVisitor = () => {
    if (name === '') {
      setError(true)
    } else {
      let arr = []
      Object.keys(skills).map(item => skills[item] ? arr = [...arr, item] : null)
  
      store.addVisitor({
          id: uniqid(),
          name,
          skills: arr
      })
      store.setCreateVisitorDialog(false);

      setName('')
      setSkills(defaultSkills)
    }
  }

  return (
    <div>
      <Dialog
        open={store.createVisitorDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Создание нового посетителя 
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
                label='Имя'
                style={{marginTop: 5}}
            />
            <FormGroup>
                {Object.keys(skills).map(skill => (
                    <FormControlLabel key={skill} control={<Checkbox 
                        onChange={() => setSkills({
                            ...skills,
                            [skill]: !skills[skill]
                        })}
                        value={skills[skill]}
                    />} label={skill} />
                ))}
            </FormGroup>
        </DialogContent>
        {error && <Alert severity="error">Имя не может быть пустым</Alert>}
        <DialogActions>
          <Button onClick={createVisitor}>Создать</Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
})

export default CreateVisitor