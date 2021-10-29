import React from 'react';
import {observer} from 'mobx-react-lite'

import store from '../store/store'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteDialog = observer(() => {

  const handleClose = () => {
    store.setDeleteDialog(false);
  };

  const deleteVisitor = () => {
    if (store.deleteDialogText.id === 'music') {
      store.deleteMusic(store.selectedMusicToDelete)
      store.setSelectedMusicToPlay(null)
      store.setSelectedPlace('all')
    } else {
      store.deleteVisitor(store.selectedVisitor)
    }
    store.setDeleteDialog(false);
  }

  return (
    <div>
      <Dialog
        open={store.deleteDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {store.deleteDialogText.text}
        </DialogTitle>
        <DialogActions>
          <Button onClick={deleteVisitor}>{store.deleteDialogText.btn}</Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
})

export default DeleteDialog