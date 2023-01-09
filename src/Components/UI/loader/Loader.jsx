import React from 'react'
import preloader from './preloader.svg'
import style from './Loader.module.css'

function Loader() {
  return (
    <div className={style.content}>
    <img src={preloader} alt='pre' />
    </div>
  )
}

export default Loader