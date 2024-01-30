import React from 'react';

const Content = ({ message }) => {
    return (
        <div>
            {message.map((mes) => {
                return <p>{mes}</p>
            })}
        </div>
    )
}

export default Content;