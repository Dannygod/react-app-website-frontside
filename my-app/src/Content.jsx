import React from 'react';
import Message from './Message';

const Content = ({ message, setMessage }) => {
    return (
        <div>
            {message.map((mes) => (
                <Message content={mes.content} message={message} setMessage={setMessage} mesID={mes.id} key={mes.id} />
            ))}
        </div>
    );
};


export default Content;