import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import './LoggedApp.css'
const UserApp = ({ show, bgImage }) => {
    return (
        <AnimatePresence>
            {
                show && <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='userPage'
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default UserApp