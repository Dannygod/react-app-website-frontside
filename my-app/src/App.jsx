import React, { useState } from 'react';
import Friend from './Friend';
import Form from './Form';
import Form2 from './Form2';
import Content from './Content';
const Test = () => {
    const [count, setCount] = useState(0);
    let friends = [{ id: 1, name: "Bob", age: 20, des: "I like turtles" },
    { id: 2, name: "Sally", age: 30, des: "I like rabbits" },
    { id: 3, name: "Billy", age: 40, des: "I like dinosaurs" }];
    const [message, setMessage] = useState([]);
    return (
        <>
            <div className="content">
                {friends.map((friend) => {
                    return <Friend key={friend.id} name={friend.name} age={friend.age} des={friend.des} />
                })}
            </div>
            <Form count={count} setCount={setCount} />
            <Form2 message={message} setMessage={setMessage} />
            <Content message={message} setMessage={setMessage} />
        </>
    );
};

export default Test;