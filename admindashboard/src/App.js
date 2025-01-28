
import { CssBaseline} from '@mui/material';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@mui/styles';


const ustyle=makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})
function App() {
  const classes=ustyle()
  return (
    <div className={classes.appMain}>
      <Sidebar></Sidebar>
      <Header></Header>
      <CssBaseline/>
    </div>
    
  );
}

export default App;
