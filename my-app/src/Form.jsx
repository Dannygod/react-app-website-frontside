import React from "react"
import { TomatoButton } from "./Components/Button"
const Form = ({ count, setCount }) => {
    const buttonHandler = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }
    return (
        <form>
            <TomatoButton className="click" onClick={buttonHandler}>Click {count} times</TomatoButton>
        </form>
    )
}

export default Form