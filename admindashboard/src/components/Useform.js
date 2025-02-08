import { useState } from "react"
import { makeStyles } from '@mui/styles';
import { Paper } from "@mui/material";
export default function Useform(initaialValue) {

    const [values, setValue] = useState(initaialValue)
    const {errors,seterrors}=useState({})

    const handleInput = e => {
        const { name, value } = e.target
        setValue({
            ...values,
            [name]: value
        })
    }

  return {
    values,
    setValue,
    handleInput,
    errors,
    seterrors
  }
}

const useStyles = makeStyles(theme => ({
    paperSpacing: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        '& .MuiFormControl-root': {
            width: "100%"
        },
    }
}))

export function Form(props) {
    const classes = useStyles()

    const {children, ...other}=props
    return (
        <form autoComplete="off" {...other}>
             <Paper className={classes.paperSpacing}>
             {props.children}
             </Paper>
           
        </form>
    )

}