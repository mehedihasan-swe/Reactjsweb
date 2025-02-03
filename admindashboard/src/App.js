
import { createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@mui/styles';
import Employee from './pages/Employees/Employee';

// you can override default theme by this create theme 

const theme = createTheme({

  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
 
  components: {
    MuiIconButton: {
      defaultProps: {
        disableRipple: true, 
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          transform: "translateZ(0)", 
        },
      },
    },
  },

})

const ustyle=makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {

  const classes=ustyle()

  return (

    <ThemeProvider theme={theme}>
     <Sidebar></Sidebar>
      <div className={classes.appMain}>
        <Header/>
        <Employee/>
      </div>
    <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
