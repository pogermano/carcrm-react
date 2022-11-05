import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, blue , red, orange} from '@mui/material/colors';
import { Button, TextField, Select , MenuItem} from '@mui/material';

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
    <h1> APLICACAO REACT </h1>
    <Button  sx={{ m: 1 }} >
    Dashed
  </Button>
  <Button   sx={{ m: 1 }}>
    Secondary
  </Button>
  <Button  size="large" sx={{ m: 1 }}>
    Large
  </Button>
  <Button variant="contained" color="secondary" size="large" sx={{ m: 1 }}>
  contained large
  </Button>
    <Button variant="text"  >Text</Button>
   
    <Button   sx={{ m: 1 }}>Outlined</Button>
    <TextField  sx={{ mt: 5 }} />
    <Button variant="contained" color="primary"  sx={{ m: 1 }}>Contained</Button>
   
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>

  </ThemeProvider>
 

)


export default App;





















