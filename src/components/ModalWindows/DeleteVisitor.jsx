import React from 'react';
import {observer} from 'mobx-react-lite'

import store from '../store/store'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteVisitor = observer(() => {

  const handleClose = () => {
    store.setDeleteVisitorDialog(false);
  };

  const deleteVisitor = () => {
    store.deleteVisitor(store.selectedVisitor)
    store.setDeleteVisitorDialog(false);
  }

  return (
    <div>
      <Dialog
        open={store.deleteVisitorDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Вы уверены, что хотите вывести его из клуба? <br/> Это действие невозможно будет отменить.
        </DialogTitle>
        <DialogActions>
          <Button onClick={deleteVisitor}>Вывести</Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
})

export default DeleteVisitor