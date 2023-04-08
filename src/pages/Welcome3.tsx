import * as React from 'react'
import p1 from '../assets/images/welcome3.svg'
export const Welcome3: React.FC = () => {
    return (
        <div className="text-center">
            <img src={p1}/>
            <h2 className="text-32px mt-48px">
                数据可视化 <br/>
                收支一目了然
            </h2>
        </div>
    )
}
