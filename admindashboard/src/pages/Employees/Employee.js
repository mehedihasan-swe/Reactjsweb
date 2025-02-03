
import Pageheader from '../../components/Pageheader'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmployeeForm from './EmployeeForm';

export default function Employee() {
  return (
    <>
      <Pageheader
        title="PgeHeader is Live"
        subtitle="SubTitle is on"
        icon={<PermIdentityIcon />}
      />
      <EmployeeForm/>
    </>

  )
}
