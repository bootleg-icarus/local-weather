import React from "react";
import { Cloud } from "./thunderStorm";
import Styled from "styled-components";

const Snow = Styled.div`
position: absolute;
z-index: 2;
top: 50%;
left: 50%;
width: 3.75em;
height: 3.75em;
margin: 0.375em 0 0 -2em;
background: currentColor;
`;


const SnowFlurry = () => {
  return (
    <div className="icon flurries">
      <Cloud />
      <Snow>
        <div className="flake"></div>
        <div className="flake"></div>
      </Snow>
    </div>
  );
};
export default SnowFlurry;
