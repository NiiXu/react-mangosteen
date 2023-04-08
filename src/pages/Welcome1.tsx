import * as React from 'react'
import p1 from '../assets/images/welcome1.svg'
import { NavLink } from 'react-router-dom'
export const Welcome1: React.FC = () => {
    return (
        <div>
            <img src={p1}/>
            <h2 className="text-center">
                会挣钱 <br/>
                还要会省钱
            </h2>
        </div>
    )
}
