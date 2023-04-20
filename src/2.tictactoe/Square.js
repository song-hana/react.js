import {useState} from 'react'

export default function Square() {
    const [value, setValue] = useState(null)

    function onClick() {
        setValue('X')
    }

    return (
        <button className='square'
                onClick={onClick}>
            {value}
        </button>
    )
}