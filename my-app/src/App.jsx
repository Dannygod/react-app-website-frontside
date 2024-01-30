import React from 'react';
import Friend from './Friend';
import Form from './Form';
const Test = () => {
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
            <Form />
        </>
    );
};

export default Test;