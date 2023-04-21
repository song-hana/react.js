import {useState, useRef} from 'react'

export default function Video() {
    const [isPlaying, setIsPlaying] = useState(false)
    const ref = useRef(null)

    function onClick() {
        const nextIsPlaying = !isPlaying
        setIsPlaying(nextIsPlaying)

        if(nextIsPlaying) ref.current.play()
        else ref.current.pause()
    }

    return (
        <>
            <button onClick={onClick}>{isPlaying ? 'pause' : 'play'}</button>
            <hr/>
            <video width='250' 
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}>
                <source type='video/mp4'
                    src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'/>
            </video>
        </>
    )
}