import React from 'react'
import Styled from 'styled-components'
import { Cloud } from './thunderStorm'
import { Rays, Sun } from './sunny'


export const Rain = Styled.div`
position: absolute;
z-index: 2;
top: 50%;
left: 50%;
width: 3.75em;
height: 3.75em;
margin: 0.375em 0 0 -2em;
:after{
    content: '';
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 1.125em;
  height: 1.125em;
  margin: -1em 0 0 -0.25em;
  background: #fff;
  border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
  box-shadow:
    0.625em 0.875em 0 -0.125em #fff,
    -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
    -1.375em -0.125em 0 rgba(255,255,255,0.2);
  transform: rotate(-28deg);
  animation: rain 3s linear infinite;
}
`

const SunShower = () => {
  return (
    <div className="icon sun-shower">
      <Cloud />
      <Sun>
        <Rays />
      </Sun>
      <Rain />
    </div>
  )
}

export default SunShower;