import { useState } from "react"
import { makeStyles } from '@mui/styles';
import { Paper } from "@mui/material";
export default function Useform(initaialValue) {

    const [values, setValue] = useState(initaialValue)

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
    handleInput
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
    return (
        <form>
             <Paper className={classes.paperSpacing}>
             {props.children}
             </Paper>
           
        </form>
    )

}