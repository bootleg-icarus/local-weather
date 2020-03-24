import React from 'react'
import Styled from 'styled-components'

export const Cloud = Styled.div`
position: absolute;
z-index: 1;
top: 50%;
left: 50%;
width: 3.6875em;
height: 3.6875em;
margin: -1.84375em;
background: #fff;
border-radius: 50%;
box-shadow:
  -2.1875em 0.6875em 0 -0.6875em #fff,
  2.0625em 0.9375em 0 -0.9375em #fff,
  0 0 0 0.375em #fff,
  -2.1875em 0.6875em 0 -0.3125em #fff,
  2.0625em 0.9375em 0 -0.5625em #fff;
  :after{
    content: '';
    position: absolute;
    bottom: 0;
    left: -0.5em;
    display: block;
    width: 4.5625em;
    height: 1em;
    background: #fff;
    box-shadow: 0 0.4375em 0 -0.0625em #fff;
  }
  :nth-child(2){
    z-index: 0;
    background: #fff;
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em #fff,
      2.0625em 0.9375em 0 -0.9375em #fff,
      0 0 0 0.375em #fff,
      -2.1875em 0.6875em 0 -0.3125em #fff,
      2.0625em 0.9375em 0 -0.5625em #fff;
    opacity: 0.8;
    transform: scale(0.8) translate(6em, -4em);
    animation: cloud 4s linear infinite;
  }
  :nth-child(2):after{
    background: #fff;
  }
`
const Lightning = Styled.div`
position: absolute;
z-index: 2;
top: 50%;
left: 50%;
width: 3.75em;
height: 3.75em;
margin: 0.375em 0 0 -2em;
background: currentColor;

`
const Bolt = Styled.div`
position: absolute;
top: 50%;
left: 50%;
margin: -0.25em 0 0 -0.125em;
color: #fff;
opacity: 0.3;
animation: lightning 2s linear infinite;
  :nth-child(2){
    width: 0.5em;
    height: 0.25em;
    margin: -1.75em 0 0 -1.875em;
    transform: translate(2.5em, 2.25em);
    opacity: 0.2;
    animation: lightning 1.5s linear infinite;
  }
  :before,:after{
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    margin: -1.625em 0 0 -1.0125em;
    border-top: 1.25em solid transparent;
    border-right: 0.75em solid;
    border-bottom: 0.75em solid;
    border-left: 0.5em solid transparent;
    transform: skewX(-10deg);
  }
  :after{
    margin: -0.25em 0 0 -0.25em;
    border-top: 0.75em solid;
    border-right: 0.5em solid transparent;
    border-bottom: 1.25em solid transparent;
    border-left: 0.75em solid;
    transform: skewX(-10deg);
  }
  :nth-child(2):before{
    margin: -0.75em 0 0 -0.5em;
  border-top: 0.625em solid transparent;
  border-right: 0.375em solid;
  border-bottom: 0.375em solid;
  border-left: 0.25em solid transparent;
  }
  :nth-child(2):after{
    margin: -0.125em 0 0 -0.125em;
    border-top: 0.375em solid;
    border-right: 0.25em solid transparent;
    border-bottom: 0.625em solid transparent;
    border-left: 0.375em solid;
  }
`



const ThunderStorm = () => {
  return (
    <div className="icon thunder-storm">
      <Cloud />
      <Lightning>
        <Bolt />
        <Bolt />
      </Lightning>
    </div>
  )
}
export default ThunderStorm;