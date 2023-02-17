import React from 'react';
import { motion } from 'framer-motion';
import './LoggedApp.css'
const LoggedApp = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.3}}
    exit={{opacity:0}}
    className='Logged_App_Container'>
    
    </motion.div>
  ) 
}

export default LoggedApp