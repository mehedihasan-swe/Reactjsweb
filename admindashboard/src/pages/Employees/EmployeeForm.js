
import { Box,Grid2} from '@mui/material';

import Useform, { Form } from '../../components/Useform';
import { Control } from '../../controls/control/Control';
import *as EmployeeServices from '../../service/EmployeeServices';

const genderItems=[
{
    id:'Male', title: 'Male'
},
{
     id:'Female', title: 'Female'
},
{
     id:'Other', title: 'Other'
}

]

const initaialValue = {
    id: '',
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: "Male",
    department: '',
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
                        <Grid2 size={{xs:12, md:7}}>
                            <Grid2 container rowSpacing={1} columnSpacing={3}>
                                <Grid2 size={{ xs: 12, md: 10 }}>
                                   
                                    <Control.Input
                                    name="fullName"
                                    label="FullName"
                                    value={values.fullName}
                                    onChange={handleInput}
                                    />
                                </Grid2>

                                <Grid2 size={{ xs: 12, md: 10 }}>
                                <Control.Input
                                    name="email"
                                    label="Email"
                                    value={values.email}
                                    onChange={handleInput}
                                    />
                                    
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 size={{xs:12, md:5}}>
                            <Control.RadioGroups
                                name="gender"
                                label="Gender"
                                value={values.gender}
                                onChange={handleInput}
                                items={genderItems}
                            />
                            <Control.Selects
                            name="department"
                            label="Department"
                            value={values.department}
                            onChange={handleInput}
                            options={EmployeeServices.getDepartments()}
                           
                            />
                        </Grid2>
                    </Grid2>
                </Box>
            </Form>
        </>
    )
}


