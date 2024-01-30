import React from 'react'

const Form = () => {
    const sumitHandler = (e) => {
        console.log(e.target);
        e.preventDefault();
        console.log(e.target.parent);
    };
    return (
        <>
            <form>
                <input type="text" name="name" id="name" onChange={sumitHandler} />
                <button onClick={sumitHandler}>Submit</button>
            </form>
        </>
    )
}

export default Form