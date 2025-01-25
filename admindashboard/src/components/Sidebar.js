import { makeStyles } from '@mui/styles';
import React from 'react'




const ustyle=makeStyles({
  Sidebar:{
    display:'flex',
    flexDirection:'column',
    position:'absolute',
    width:'320px',
    height:'100%',
    backgroundColor:'#253053'
  }
})


export default function Sidebar() {
const classes=ustyle();
 console.log(' :', classes);
  
  return (
    <div className={classes.Sidebar}>

      
    </div>
   
  )
}
