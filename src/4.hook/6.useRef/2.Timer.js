import {useState, useRef} from 'react'

export default function Timer() {
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null)

    function onStart() {
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => setNow(Date.now()), 10)
    }

    function onStop() {
        clearInterval(intervalRef.current)
    }

    let elapsedTime = 0
    if(startTime && now) elapsedTime = (now - startTime) / 1000

    return (
        <>
            <h1>{elapsedTime.toFixed(2)}</h1>
            <button onClick={onStart}>start</button>
            <button onClick={onStop}>stop</button>
        </>
    )
}