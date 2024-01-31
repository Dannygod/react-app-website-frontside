import React from "react"
import Button from "./Components/Button"
const Form = ({ count, setCount }) => {
    const buttonHandler = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }
    return (
        <form>
            <Button className="click" onClick={buttonHandler}>Click {count} times</Button>
        </form>
    )
}

export default Form