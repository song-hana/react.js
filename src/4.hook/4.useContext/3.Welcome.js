import {createContext, useContext, useState } from 'react'
import './3.style.css'

const CurrentUserContext = createContext(null)

export default function Welcome() {
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <CurrentUserContext.Provider value={{
            currentUser,
            setCurrentUser
        }}>
            <Form/>
        </CurrentUserContext.Provider>
    )
}

function Form() {
    return (
        <Panel title='welcome'>
            <Login/>
        </Panel>
    )
}

function Panel({title, children}) {
    return (
        <section className='panel'>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Login() {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

    let element
    if(!currentUser) element = 
        <Button onClick={() => setCurrentUser({username: 'advika'})}>login</Button>
    else element = <p> you logged in as {currentUser.username}.</p>

    return element
}

function Button({onClick, children}) {
    return (
        <button className='button' onClick={onClick}>
            {children}
        </button>
    )
}