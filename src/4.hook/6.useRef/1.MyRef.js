import {useRef} from 'react'

export default function MyRef() {
    let ref = useRef(0)

    function onClick() {
        ref.current = ref.current + 1
        console.log(ref)
    }

    return <button onClick={onClick}>click</button>
}