
import { Box, FormControl, FormControlLabel, FormLabel, Grid2,Radio,RadioGroup,TextField } from '@mui/material';

import Useform, { Form } from '../../components/Useform';

const initaialValue = {
    id: '',
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: "Male",
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}

export default function EmployeeForm() {

    const { values, handleInput } = Useform(initaialValue)
    
    console.log(' :', values.gender);
    return (
        <>
            <Form>
                <Box sx={{ width: '100%' }}>
                    <Grid2 container rowSpacing={1} columnSpacing={3}>
                        <Grid2 size={7}>
                            <Grid2 container rowSpacing={1} columnSpacing={3}>
                                <Grid2 size={{ xs: 12, md: 10 }}>
                                    <TextField
                                        variant='outlined'
                                        name="fullName"
                                        label="Full Name"
                                        value={values.fullName}
                                        onChange={handleInput}
                                    />

                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 10 }}>
                                    <TextField
                                        variant='outlined'
                                        name='email'
                                        label="Email"
                                        value={values.email}
                                        onChange={handleInput}
                                    />
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 size={5}>
                            <FormControl>
                                <FormLabel>{values.gender}</FormLabel>
                                <RadioGroup row
                                 name="gender"
                                 value={values.gender}
                                 onChange={handleInput}>
                                    <FormControlLabel value="Male" control={<Radio/>} label="Male" />
                                    <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                                    <FormControlLabel value="Other" control={<Radio/>} label="Other"/>
                                </RadioGroup>
                            </FormControl>

                        </Grid2>
                    </Grid2>
                </Box>
            </Form>
        </>
    )
}


