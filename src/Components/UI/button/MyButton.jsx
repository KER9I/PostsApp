import React from 'react'
import style from './MyButton.module.css'

function MyButton({children, ...props}) {
  return (
    <button {...props} className={style.btn}>
        {children}
    </button>
  )
}

export default MyButton