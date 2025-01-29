import { Box, Card, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles=makeStyles(theme=>({
    root:{
        backgroundColor:"#4848f8"
    },
    pageheader:{
        padding:theme.spacing(3),
        marginBottom:theme.spacing(2),
        display:"flex"
    },
    pageicon:{
        padding:theme.spacing(2),
        display:"inline-block",
        color:"#3c44b1"
        
    },
    pageTitle:{
        paddingLeft:theme.spacing(2),
        '& .MuiTypography-subtitle':{
            opacity:'0.6'
        }
    }
}))

export default function Pageheader({title, subtitle, icon}) {
    const classes=useStyles()
  return (
    <>
     <Paper levation={3} square className={classes.root}>
        <Box className={classes.pageheader}>
            <Card className={classes.pageicon}>
                {icon}
            </Card>
            <Box className={classes.pageTitle}>
                <Typography variant='h6' component="div">{title}</Typography>
                <Typography variant='subtitle' component="div">{subtitle}</Typography>
            </Box>
        </Box>
     </Paper>
    </>
  )
}
