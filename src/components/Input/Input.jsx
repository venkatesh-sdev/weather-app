import { useDispatch, useSelector } from 'react-redux';
import { setShowLogged } from '../../redux/data';

const Input = ({ inputValue, inputRef, setInputValue, prevRef, nextRef, spanData, spanRef }) => {
    const data = useSelector(state => state.loginData);
    const dispatch = useDispatch();
    return (
        <input
            value={inputValue}
            ref={inputRef}
            type='text'
            max='9'
            min='0'
            pattern='[0-9]'
            onChange={(e) => {
                if (e.target.value === '0' || e.target.value === '1' || e.target.value === '2' || e.target.value === '3' || e.target.value === '4' || e.target.value === '5' || e.target.value === '6' || e.target.value === '7' || e.target.value === '8' || e.target.value === '9') {
                    setInputValue(e.target.value)
                    nextRef.current.focus();
                }
            }}
            onKeyDown={e => {
                if (e.key === 'Backspace') {
                    setInputValue('')
                    prevRef.current.focus();
                }
            }}
            onFocus={() => {
                spanRef.current.style.transform = `translateX(${spanData}px)`
            }}
        />
    )
}

export default Input