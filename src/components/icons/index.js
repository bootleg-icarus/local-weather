import React from 'react'
import Sunny from "./sunny";
import SunShower from './sunShower'
import ThunderStorm from './thunderStorm'
import Cloudy from './cloudy'
import SnowFlurry from "./snow";
import Rainy from './rain'

const Icon = (props) => {
    return (
        <div>
            {props.icon === "SunShower" ? <SunShower /> : null}
            {props.icon === "Cloudy" ? <Cloudy /> : null}
            {props.icon === "Sunny" ? <Sunny /> : null}
            {props.icon === "Rainy" ? <Rainy /> : null}
            {props.icon === "ThunderStorm" ? <ThunderStorm /> : null}
            {props.icon === "SnowFlurry" ? <SnowFlurry /> : null}
        </div>
    )
}
export default Icon