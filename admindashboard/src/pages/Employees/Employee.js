import React, { useState } from 'react'
import Pageheader from '../../components/Pageheader'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Box, Grid2, Paper, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles(theme=>({
  paperSpacing:{
    padding:theme.spacing(2),
    margin:theme.spacing(2),

    '& .MuiFormControl-root':{
      width:"99%"
    },
  }
}))


const initaialValue={
  id:'',
  fullName:'',
  email:'',
  mobile:'',
  city:'',
  gender:'male',
  departmentId:'',
  hireDate: new Date(),
  isPermanent:false
}

export default function Employee() {
  const classes=useStyles()
 
  const [value]=useState(initaialValue)

  return (
    <>
      <Pageheader
        title="PgeHeader is Live"
        subtitle="SubTitle is on"
        icon={<PermIdentityIcon />}
      />
      <Paper className={classes.paperSpacing}>
        <Box sx={{ width: '100%' }}>
          <Grid2 container rowSpacing={1} columnSpacing={3}>
            <Grid2 size={7}>
              <TextField
              variant='outlined'
              name="fullName"
              label="Full Name"
              value={value.fullName}
              />
              
            </Grid2>
            <Grid2 size={7}>
              <TextField
              variant='outlined'
              name='email'
              label="Email"
              value={value.email}
              />
            </Grid2>
          </Grid2>
        </Box>
      </Paper>
      </>
  )
}
