import {useState} from 'react'

export default function Main() {
    {/* 구조분해할당 */}
    const [count, setCount] = useState(0)

    function onClick() {
        setCount(count + 1)
    }

    return <button onClick={onClick}>{count}</button>
}