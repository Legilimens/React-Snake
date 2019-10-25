import React, { useReducer } from 'react';
import { DialogContext } from './dialogContext';
import { dialogReducer } from './dialogReducer';
import { SHOW_DIALOG, HIDE_DIALOG } from '../types';

export const DialogState = ({ children }) => {
    const [state, dispatch] = useReducer(dialogReducer, { open: false });

    const dialogOpen = () => { dispatch({ type: SHOW_DIALOG }) }

    const dialogHide = () => { dispatch({ type: HIDE_DIALOG }) }

    return (
        <DialogContext.Provider
            value={{
                dialogOpen,
                dialogHide,
                dialog: state.open
            }}
        >
            {children}
        </DialogContext.Provider>
    )
}