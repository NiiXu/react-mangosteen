import * as React from 'react'
import p1 from '../assets/images/welcome4.svg'
export const Welcome4: React.FC = () => {
    return (
        <div  className="text-center">
            <img src={p1}/>
            <h2 className="text-32px mt-48px">
                云备份 <br/>
                再也不怕数据丢失
            </h2>
        </div>
    )
}
