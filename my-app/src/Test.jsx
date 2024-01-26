import React from 'react';
import Friend from './Friend';
const Test = () => {
    let friends = [{ name: "Bob", age: 20, des: "I like turtles" },
    { name: "Sally", age: 30, des: "I like rabbits" },
    { name: "Billy", age: 40, des: "I like dinosaurs" }]
    return (
        <>
            <div className="content">
                {friends.map((friend) => {
                    return <Friend name={friend.name} age={friend.age} des={friend.des} />
                })}
            </div>
        </>
    );
};

export default Test;