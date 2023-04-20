import {useState} from 'react'

function Button({count, onClick}) {
    return <button onClick={onClick}>{count} times</button>
}

export default function Main() {
    const [count, setCount] = useState(0)

    function onClick() {
        setCount(count + 1)
    }

    return (
        <>
            <Button count={count} onClick={onClick}/>
            <Button count={count} onClick={onClick}/>
        </>
    )
}
