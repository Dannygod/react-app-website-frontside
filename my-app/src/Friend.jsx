import React from 'react'

const Friend = (props) => {
  const { name, age, des } = props;
  return (
    <li id={name}>
      <span>{name}, </span>
      <span>{age}, </span>
      <span>{des}, </span>
    </li>
  );
};

export default Friend