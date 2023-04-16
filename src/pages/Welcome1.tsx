import * as React from 'react'
import p1 from '../assets/images/pig.svg'
export const Welcome1: React.FC = () => {
    return (
        <div  className="text-center">
            <img className="w-128px h-130px" src={p1}/>
            <h2 className="text-32px mt-48px">
                会挣钱 <br/>
                还要会省钱
            </h2>
        </div>
    )
}
