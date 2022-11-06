import React from 'react'
import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'

export default function Confirm(props) {

    const { open, title, onClose, onConfirm } = props;
    return (
        <Dialog
            open={open}
            onClose={() => onClose()}
        >
            <DialogTitle >{title || 'Tem certeza que deseja excluir?'}</DialogTitle>
            <DialogActions className='justify-content-center me-2'>
                <Button onClick={() => onClose()}>Não</Button>
                <Button onClick={() => {
                    onConfirm();
                    onClose();
                }}
                variant="contained"
                color='primary'
                >
                    Sim
                </Button>
            </DialogActions>
        </Dialog>
    )
}
