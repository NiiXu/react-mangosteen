import * as React from 'react'
import s from './Welcome1.module.scss'
import c from 'classnames'
export const Welcome1: React.FC = () => {
  return (
        <div className={c([s.wrapper,s.blue])}>
            山竹记账
        </div>
  )
}
