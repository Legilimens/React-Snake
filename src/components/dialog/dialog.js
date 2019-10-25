import React, { useContext } from 'react';
import { DialogContext } from '../../context/dialog/dialogContext';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function ModalDialog() {
    const { dialog, dialogHide } = useContext(DialogContext)

    return (
        <Dialog
            open={dialog}
            onClose={dialogHide}
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
                <Button onClick={dialogHide} color="primary" autoFocus>
                    Новая игра
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalDialog;