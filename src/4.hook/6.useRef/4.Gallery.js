import {useRef} from 'react'
import './4.style.css'

export default function Gallery() {
    const ref = useRef(null)

    function scrollToIndex(i) {
        const cats = ref.current
        
        const cat = cats.querySelectorAll('li > img')[i]
        cat.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return (
        <>
            <nav>
                <button onClick={() => scrollToIndex(0)}>cat0</button>
                <button onClick={() => scrollToIndex(1)}>cat1</button>
                <button onClick={() => scrollToIndex(2)}>cat2</button>
            </nav>

            <div>
                <ul ref={ref}>
                    <li><img src='https://placekitten.com/g/200/200'/></li>
                    <li><img src='https://placekitten.com/g/300/200'/></li>
                    <li><img src='https://placekitten.com/g/250/200'/></li>
                </ul>
            </div>
        </>
    )
}