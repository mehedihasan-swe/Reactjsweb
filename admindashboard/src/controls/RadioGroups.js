
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@mui/material'
import React from 'react'

export default function RadioGroups(props) {

    const { name, label, value, onChange, items } = props
    return (
        <>

            <FormControl>
                <FormLabel>{label}</FormLabel>
                <MuiRadioGroup row
                    name={name}
                    value={value}
                    onChange={onChange}>
                    {
                    items.map(
                            (item, index) => (
                                <FormControlLabel value={item.id} control={<Radio />} label={item.title}/>
                            ))
                    }
                </MuiRadioGroup>
            </FormControl>

        </>
    )
}
