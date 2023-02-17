import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { CiSun } from 'react-icons/ci';
import { IoMdLogIn } from 'react-icons/io';
import './LockScreenContent.css'

const LockScreenContent = ({ setShow }) => {
    const today = new Date();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    useEffect(() => {
        const timeData = setInterval(() => {
            setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
        }, 1000)
        return () => {
            clearInterval(timeData)
        }
    }, [time,setTime])
    useEffect(() => {
        setDate(today.getDay() + '/' + today.getMonth() + "/" + today.getFullYear())
    }, [])
    return (
        <div className='LockScreen_Content_Container'>
            <div className='LockScreen_Content'>
                <motion.div
                    initial={{ translateX: '-500px' }}
                    transition={{ duration: 1 }}
                    animate={{ translateX: '0' }}
                    exit={{ translateX: '-500px' }}
                    className='LockScreen_Time'>
                    <motion.h1
                        initial={{ translateX: '-500px' }}
                        transition={{ duration: 1 }}
                        animate={{ translateX: '0' }}
                        exit={{ translateX: '-500px' }}
                    >{time??`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`}</motion.h1>
                    <h2>{date}</h2>
                </motion.div>
                <motion.div
                    initial={{ translateX: '200px' }}
                    transition={{ duration: 1 }}
                    animate={{ translateX: '0' }}
                    className='LockScreen_Login'
                    onClick={() => setShow(true)}
                >
                    <IoMdLogIn />
                </motion.div>
            </div>
        </div>
    )
}

export default LockScreenContent