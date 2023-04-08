import * as React from 'react'
import p1 from '../assets/images/welcome2.svg'
export const Welcome2: React.FC = () => {
    return (
        <div  className="text-center">
            <img src={p1}/>
            <h2 className="text-32px mt-48px">
                每日提醒 <br/>
                不会遗漏每一笔账单
            </h2>
        </div>
    )
}
