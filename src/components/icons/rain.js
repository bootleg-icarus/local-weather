import React from 'react'
import { Cloud } from './thunderStorm'
import { Rain } from './sunShower'

const Rainy = () => {
    return (
        <div className="icon rainy">
            <Cloud />
            <Rain />
        </div>
    )
}
export default Rainy