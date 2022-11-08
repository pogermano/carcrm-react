import React from 'react'
import { changeNotify } from '../../store/action/notify.action';
import { Snackbar, SnackbarContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()((theme) => {
    return {
        success: {
            backgroundColor: theme.palette.success.main,
        },
        error: {
            backgroundColor: theme.palette.error.main,
        },
    };
  });

export default function Notify() {

    const dispatch = useDispatch();
    const notify = useSelector(state => state.notifyReducer);
    const { classes} = useStyles();

   /* modificar classes.error conforme state do component */

    return (
        <Snackbar
            anchorOrigin={{
                horizontal: notify.horizontal,
                vertical: notify.vertical,
            }}
            open={notify.open}
            autoHideDuration={notify.time}
            onClose={() => dispatch(changeNotify({ open: false }))}
        >
            <SnackbarContent
                className={classes.error + ' d-flex justify-content-center'}
                message={
                    <span className='d-flex align-items-center'>{notify.msg}</span>
                }
            />
        </Snackbar>
    )
}
