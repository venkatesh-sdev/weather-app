import './LoginForm.css';
import LockScreenContent from '../LockScreenContent/LockScreenContent';
import LockPinForm from '../LockPinForm/LockPinForm';
import { useState } from 'react';
const LoginForm = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='LoginForm'>
      {
        show?<LockPinForm setShow={setShow}/>:<LockScreenContent setShow={setShow}/>
      }
    </div>
  )
}

export default LoginForm