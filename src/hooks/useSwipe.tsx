import {RefObject, useEffect, useRef, useState} from 'react';

interface Config{
    onTouchStart?:(e:TouchEvent)=>void
    onTouchMove?:(e:TouchEvent)=>void
    onTouchEnd?:(e:TouchEvent)=>void
}
export const useSwipe = (elementRef: RefObject<HTMLElement>,config:Config) => {
    const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
    const x = useRef(-1)
    const onTouchStart = (e: TouchEvent) => {
        config?.onTouchMove?.(e)
        e.preventDefault()
        x.current = e.touches[0].clientX
    }
    const onTouchMove = (e: TouchEvent) => {
        config?.onTouchMove?.(e)

        const newX = e.touches[0].clientX
        const d = newX - x.current
        if (Math.abs(d) < 3) {
            setDirection('')
        } else if (d > 0) {
            setDirection('right')
        } else {
            setDirection('left')
        }
    }
    const onTouchEnd = (e: TouchEvent) => {
        config?.onTouchMove?.(e)

        setDirection('')
    }

    //挂载时监听元素
    useEffect(() => {
        if (!elementRef.current) {return}
        elementRef.current.addEventListener('touchstart', onTouchStart)
        elementRef.current.addEventListener('touchmove', onTouchMove)
        elementRef.current.addEventListener('touchend', onTouchEnd)
        return () => {
            if (!elementRef.current) {return}
            elementRef.current.removeEventListener('touchstart', onTouchStart)
            elementRef.current.removeEventListener('touchmove', onTouchMove)
            elementRef.current.removeEventListener('touchend', onTouchEnd)
        }
    }, [])
    return {direction}
}
