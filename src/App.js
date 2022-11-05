import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, blue , red, orange} from '@mui/material/colors';
import { Button, TextField, Select , MenuItem} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdPayment} from 'react-icons/md';



const theme = createTheme({
  palette: {   
    
    primary: {
      main: blue[700],
    },
    secondary:   {
      main: purple[700],
    },
    tuca: {

      main: orange[500],
    }

  }, 
  components: {
   MuiButton: {
      defaultProps: {
        // The props to change the default for.
        fullWidth: true, 
        variant:'contained',
      },
    },
    MuiTextField: {
      defaultProps: {
        // The props to change the default for.
        fullWidth: true,
        variant:'outlined',
        color: 'tuca'
      },
   },

   MuiSelect: {
    defaultProps: {
      // The props to change the default for.
      fullWidth: true,
      variant:'outlined',
      color: 'tuca'
    },
   },

   





},
});


const App = () => (
  <ThemeProvider theme={theme}>
    <h1 className="text-danger"> APLICACAO REACT </h1>
<MdPayment style={{fontSize:'60px', color: 'red'}}/>

  </ThemeProvider>
 

)


export default App;





















