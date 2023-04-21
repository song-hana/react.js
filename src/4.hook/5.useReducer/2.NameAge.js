import { useReducer} from 'react';

export default function NameAge() {
    const [user, dispatch] = useReducer(reducer, {
        username: 'taylor',
        age: 22
    })

    function onClick() {
        dispatch({type: 'plusAge'})
    }

    function onChange(e) {
        dispatch({
            type: 'fixUsername',
            nextUsername: e.target.value
        })
    }

    return (
        <>
            <input value={user.username} onChange={onChange}/>
            <button onClick={onClick}>plus age</button>
            <p>hello, {user.username} you are {user.age}</p>
        </>
    )
}

function reducer(user, action) {
    let man

    switch(action.type) {
        case 'plusAge' : man = {
            username: user.userName,
            age: user.age + 1
        }; break
        case 'fixUsername' : man = {
            username: action.nextUsername,
            age: user.age
        }; break
        default: throw Error('unknown type: ' + action.type)
    }

    return man
}