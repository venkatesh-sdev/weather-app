import React from 'react'

const Input = ({ inputValue, inputRef, setInputValue, prevRef, nextRef, spanData, spanRef }) => {
    return (
        <input
            value={inputValue}
            ref={inputRef}
            type='text'
            maxLength='1'
            pattern='[0-9]'
            onKeyDown={e => {
                alert(e.keyCode)
                if (e.key === 'Backspace') {
                    setInputValue('')
                    prevRef.current.focus();
                } else {
                    if(e.key=='0'||e.key=='1'||e.key=='2'||e.key=='3'||e.key=='1'||e.key=='4'||e.key=='5'||e.key=='6'||e.key=='7'||e.key=='8'||e.key=='9'){
                        setInputValue(e.key)
                        nextRef.current.focus();
                    }else{
                        prevRef.current.focus();
                    }

                }
            }}
            onFocus={() => {
                spanRef.current.style.transform = `translateX(${spanData}px)`
            }}
        />
    )
}

export default Input