import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Form2 = ({ message, setMessage }) => {
    const [input, setInput] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const sumitHandler = (e) => {
        e.preventDefault()
        if (input === "") {
            return;
        }
        setMessage(prevMessages => [...prevMessages, { content: input, id: uuidv4() }]);
        setInput("");
        console.log(message);
    }
    return (
        <form>
            <input type="text" onChange={inputHandler} value={input} />
            <button onClick={sumitHandler}>Sumit</button>
        </form>
    )
}

export default Form2