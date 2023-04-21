import {useState, useEffect} from 'react'

export default function Pointer(){
    const [position, setPosition] = useState({x: 0, y: 0})
    
    useEffect(() =>{
        function onMove(e) {
            setPosition({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('pointermove', onMove)
        return () => window.removeEventListener('pointermove', onMove)
    }, [])

    return (
        <>
            <div style = {{
                position:'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40
            }}/>
        </>
    )
}