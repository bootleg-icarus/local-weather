import React from "react";
import Styled from "styled-components";

export const Sun = Styled.div`
position: absolute;
top: 40%;
left: 70%;
width: 2.5em;
height: 2.5em;
margin: -1.25em;
background: currentColor; 
border-radius: 50%;
box-shadow: 0 0 0 0.375em #fff;
animation: spin 12s infinite linear;
`;
export const Rays = Styled.div`
position: absolute;
  top: -2em;
  left: 50%;
  display: block;
  width: 0.375em;
  height: 1.125em;
  margin-left: -0.1875em;
  background: #fff;
  border-radius: 0.25em;
  box-shadow: 0 5.375em #fff;
  :before, :after{
    content: '';
    position: absolute;
    top: 0em;
    left: 0em;
    display: block;
    width: 0.375em;
    height: 1.125em;
    transform: rotate(60deg);
    transform-origin: 50% 3.25em;
    background: #fff;
    border-radius: 0.25em;
    box-shadow: 0 5.375em #fff;
  }
  :before{
    transform: rotate(120deg);
  }
`;
const Sunny = () => {
  return (
    <div className="icon sunny">
      <Sun>
        <Rays></Rays>
      </Sun>
    </div>
  );
};

export default Sunny;
