import {useRef} from 'react'

export default function TextField() {
    const ref = useRef(null)

    function onClick() {
        ref.current.focus()
        console.log(ref)
    }

    return (
        <>
            <input ref={ref}/>
            <button onClick={onClick}>focus</button>
        </>
    )
}