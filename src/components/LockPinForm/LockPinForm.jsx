import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCheckData, setShowLogged } from '../../redux/data';
import Input from '../Input/Input';
import './LockPinForm.css'

const LockPinForm = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.loginData)
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [animateError, setaAnimateError] = useState(false)

    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const spanRef = useRef();

    useEffect(() => {
        inputRef1.current.focus();
    }, [])

    useEffect(() => {
        if (inputValue4) {
            dispatch(setCheckData([inputValue1, inputValue2, inputValue3, inputValue4]))
            dispatch(setShowLogged())
            // inputRef1.current.focus();
            // setInputValue1('');
            // setInputValue2('');
            // setInputValue3('');
            // setInputValue4('');
            // setaAnimateError(true);

        }
    }, [inputValue4])

    return (
        <motion.div
            initial={{ scale: 2, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ translateY: '-500px' }}
            className='formContainer'>
            <div className={`inputContainer ${animateError ? 'animateError' : ''}`}>
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
            <button onClick={() => { console.log(data) }}>Back</button>
        </motion.div>
    )
}

export default LockPinForm