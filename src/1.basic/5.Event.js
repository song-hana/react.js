export default function Main() {
    function onClick() {
        alert('you clicked me.')
    }

    return <button onClick={onClick}>click me</button>
}