import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import Input from '../Input/Input';
import './LockPinForm.css'

const LockPinForm = ({ setShow }) => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');

    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const spanRef = useRef();

    useEffect(()=>{
        inputRef1.current.focus();
    },[])

    return (
        <motion.div
        initial={{scale:2,opacity:0.5}}
        transition={{ duration: 0.5 }}
        animate={{ scale:1,opacity:1}}
        exit={{ translateY: '-500px' }}
            className='formContainer'>
            <div className='inputContainer'>
                <Input
                    inputValue={inputValue1}
                    inputRef={inputRef1}
                    nextRef={inputRef2}
                    prevRef={inputRef1}
                    setInputValue={setInputValue1}
                    spanData={0}
                    spanRef={spanRef}
                />
                <Input
                    inputValue={inputValue2}
                    inputRef={inputRef2}
                    nextRef={inputRef3}
                    prevRef={inputRef1}
                    setInputValue={setInputValue2}
                    spanData={60}
                    spanRef={spanRef}
                />
                <Input
                    inputValue={inputValue3}
                    inputRef={inputRef3}
                    nextRef={inputRef4}
                    prevRef={inputRef2}
                    setInputValue={setInputValue3}
                    spanData={120}
                    spanRef={spanRef}
                />
                <Input
                    inputValue={inputValue4}
                    inputRef={inputRef4}
                    nextRef={inputRef4}
                    prevRef={inputRef3}
                    setInputValue={setInputValue4}
                    spanData={180}
                    spanRef={spanRef}
                />
                <span ref={spanRef}></span>
                
            </div>
            <button onClick={() => setShow(false)}>Back</button>
        </motion.div>
    )
}

export default LockPinForm