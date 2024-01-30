import React, { useState } from 'react';
import Friend from './Friend';
import Form from './Form';

const Test = () => {
    const [count, setCount] = useState(0)
    const buttonHandler = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }
    let friends = [{ id: 1, name: "Bob", age: 20, des: "I like turtles" },
    { id: 2, name: "Sally", age: 30, des: "I like rabbits" },
    { id: 3, name: "Billy", age: 40, des: "I like dinosaurs" }];

    return (
        <>
            <div className="content">
                {friends.map((friend) => {
                    return <Friend key={friend.id} name={friend.name} age={friend.age} des={friend.des} />
                })}
            </div>
            <Form count={count} buttonHandler={buttonHandler} />
        </>
    );
};

export default Test;