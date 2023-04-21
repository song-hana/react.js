import {forwardRef, useRef} from 'react'

const Input = forwardRef((props, ref) => 
    <input {...props} ref={ref}/>)

export default function ComRef() {
    const ref = useRef(null)

    function onClick() {
        ref.current.focus()
    }

    return (
        <>
            <Input ref={ref}/>
            <button onClick={onClick}>focus</button>
        </>
    )
}