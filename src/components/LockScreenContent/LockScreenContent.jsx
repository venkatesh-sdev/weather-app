import { motion } from 'framer-motion'
import { CiSun } from 'react-icons/ci';
import { IoMdLogIn } from 'react-icons/io';
import './LockScreenContent.css'

const LockScreenContent = ({setShow}) => {
    return (
        <div className='LockScreen_Content_Container'>
            <div className='LockScreen_Content'>
                <motion.div
                    initial={{ translateX: '-500px' }}
                    transition={{ duration: 1 }}
                    animate={{ translateX: '0' }}
                    exit={{ translateX: '-500px' }}
                    className='LockScreen_Time'>
                    <h1>9:00</h1>
                    <div className='LockDegree'>
                        <CiSun />
                        <h2>79<span className='LockDegree_Super'>F</span></h2>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ translateX: '200px' }}
                    transition={{ duration: 1 }}
                    animate={{ translateX: '0' }}
                    className='LockScreen_Login'
                    onClick={()=>setShow(true)}
                >
                    <IoMdLogIn />
                </motion.div>
            </div>
        </div>
    )
}

export default LockScreenContent