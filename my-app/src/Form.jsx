import React from "react"

const Form = ({ count, buttonHandler }) => {

    return (
        <>
            <form>
                <input type="text" name="name" id="name" />
                <button onClick={buttonHandler}>Click {count} times</button>
            </form>
        </>
    )
}

export default Form