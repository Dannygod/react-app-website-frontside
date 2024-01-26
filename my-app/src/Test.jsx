import React from 'react';

const Test = () => {
    let friends = ['John', 'Mary', 'Bob', 'Jane'];
    return (
        <div>
            <h1>{friends.map((friend) => {
                return <span key={friend}>{friend} </span>;
            })}</h1>
        </div>
    );
};

export default Test;