import './LoginForm.css';
import LockScreenContent from '../LockScreenContent/LockScreenContent';
import LockPinForm from '../LockPinForm/LockPinForm';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
const LoginForm = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='LoginForm'>
      <AnimatePresence>
        {
          show ? <LockPinForm setShow={setShow} /> : <LockScreenContent setShow={setShow} />
        }
      </AnimatePresence>
    </div>
  )
}

export default LoginForm