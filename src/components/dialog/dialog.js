import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function ModalDialog(props) {
    const { dialogOpen, setDialogOpen } = props;
    return (
        <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Game over :("}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Игра окончена. Но не расстраивайтесь! Попробуйте снова, и Вам обязательно повезёт!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setDialogOpen(false)} color="primary" autoFocus>
                    Новая игра
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalDialog;