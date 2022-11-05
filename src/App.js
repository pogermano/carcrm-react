import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, blue,  orange } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes";


const theme = createTheme({
  palette: {

    primary: {
      main: blue[700],
    },
    secondary: {
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
        variant: 'contained',
      },
    },
    MuiTextField: {
      defaultProps: {
        // The props to change the default for.
        fullWidth: true,
        variant: 'outlined',
        color: 'tuca'
      },
    },

    MuiSelect: {
      defaultProps: {
        // The props to change the default for.
        fullWidth: true,
        variant: 'outlined',
        color: 'tuca'
      },
    },







  },
});


const App = () => (
  <ThemeProvider theme={theme}>
    <Routes/>
  </ThemeProvider>


)


export default App;





















