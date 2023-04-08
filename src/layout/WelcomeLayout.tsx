import {animated, useTransition} from '@react-spring/web'
import type {ReactNode} from 'react'
import React, {useRef} from 'react'
import {Link, useLocation, useOutlet} from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const linkMap = {
    '/welcome/1': '/welcome/2',
    '/welcome/2': '/welcome/3',
    '/welcome/3': '/welcome/4',
    '/welcome/4': '/welcome/1',

}

export const WelcomeLayout: React.FC = () => {
    const map = useRef<Record<string, ReactNode>>({})
    const location = useLocation()
    const outlet = useOutlet()
    map.current[location.pathname] = outlet
    const transitions = useTransition(location.pathname, {
        from: {transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)'},
        enter: {transform: 'translateX(0%)'},
        leave: {transform: 'translateX(-100%)'},
        config: {duration: 1000}
    })
    return (
        <div className="bg-#5f34bf h-screen flex flex-col items-stretch pb-16px">
            <header className="shrink-0 text-center">
                <img src={logo}/>
                <h1 className="text-#D4D4EE">山竹记账</h1>
            </header>
            <main className="shrink-1 grow-1 bg-white m-16px rounded-8px border flex justify-center items-center">
                {
                    transitions((style, pathname) =>
                        <animated.div key={pathname} style={style}>
                            {map.current[pathname]}
                        </animated.div>
                    )
                }
            </main>
            <footer style={{color: 'white'}} className="shrink-0 text-center text-white text-24px grid grid-cols-3 grid-row-1">
                <Link style={{gridArea: '1/2/2/3'}} to={linkMap[location.pathname]}>下一页</Link>
                <Link style={{gridArea: '1/3/2/4'}} to="./welcome/xxx">跳过</Link>
            </footer>
        </div>
    )
}
