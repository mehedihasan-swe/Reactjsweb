
import { ThemeProvider } from 'styled-components';


import MyMainpage from './pages/MyMainpage';

const Theme={
  color:{
    black:"#575757",
    white:"#ffffffff",
    navcolor:"#81c8f7ff"
  },
   mobile:"980px",
   smalldevice:"580px"
}


function App() {
 
  return (
    
    <ThemeProvider theme={Theme}>
      <div className="App">
    
      <MyMainpage></MyMainpage>
      </div>

  </ThemeProvider>
    
  );
}

export default App;