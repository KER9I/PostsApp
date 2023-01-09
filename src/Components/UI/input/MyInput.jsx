import React from 'react'
import style from './MyInput.module.css'

function MyInput(props) {
  return (
    <input className={style.inpt} {...props}></input>
  )
}

export default MyInput