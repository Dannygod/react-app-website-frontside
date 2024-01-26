import React from 'react'

const Friend = (props) => {
  const { name, age, des } = props;
  return (
    <div id={name}>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{des}</h4>
    </div>
  );
};

export default Friend