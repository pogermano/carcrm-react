import React from "react";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, blue, orange, green, red } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import Routes from "./Routes";
import { Loading, Notify , Alert, Confirm} from "./view/components";

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
    },
    success: {

      main: green[500],
    },
    error: {

      main: red[600],
    }

  },
  components: {
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        fullWidth: true,
        variant: 'contained'
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

    MuiDialogTitle: {
      defaultProps: {
        // The props to change the default for.
        fontSize: '0.9rem',
      },
    }, 
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '0.7rem',
        },
      },
    },

  },
});


const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
       <Alert/>
      <Notify/>
      <Loading/>
      <Routes />
    </ThemeProvider>
  </Provider>

)


export default App;





















