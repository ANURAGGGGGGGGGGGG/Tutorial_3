import React from "react";
//child component
const Input = (props) => {
  return <input checked={props.checked} type={props.type} disabled={props.disabled} placeholder= {props.placeholder} onInput={props.onChange} className={props.className}/>;
};

const Button = (props) => {
  return <buttom className={props.className} onClick = {props.onClick}> {props.text}</buttom>;
};
export { Input, Button };
