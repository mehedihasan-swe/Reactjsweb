
import { createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@mui/styles';
import Pageheader from './components/Pageheader';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

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
  }
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
        <Pageheader 
        title="PgeHeader is Live" 
        subtitle="SubTitle is on"
        icon={<PermIdentityIcon/>}
        />
      </div>
    <CssBaseline/>
    </ThemeProvider>

  );
}

export default App;
