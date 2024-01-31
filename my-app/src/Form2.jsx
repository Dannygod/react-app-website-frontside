import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from './Components/Button';
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
            <Button onClick={sumitHandler}>Sumit</Button>
        </form>
    )
}

export default Form2