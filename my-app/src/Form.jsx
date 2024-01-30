import React from "react"

const Form = ({ count, setCount }) => {
    const buttonHandler = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }
    return (
        <form>
            <button onClick={buttonHandler}>Click {count} times</button>
        </form>
    )
}

export default Form