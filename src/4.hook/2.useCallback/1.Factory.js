import React, {useState, useCallback} from 'react'

export default function Factory() {
    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    const makeCar = () => setCarCnt(carCnt + 1)
    const makeShip = useCallback(() => setShipCnt(shipCnt + 1), [shipCnt])

    return (
        <>
            <Car make={makeCar}/>{' '}
            <Ship make={makeShip}/>
        </>
    )
}

const Car = React.memo(function({make}) {
    console.log('car')
    return <button onClick={make}>car</button>
})

const Ship = React.memo(function({make}) {
    console.log('ship')
    return <button onClick={make}>ship</button>
})
