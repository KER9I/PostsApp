import React from 'react'
import style from './PostWindow.module.css'

function PostWindow({children, visible, setVisible}) {

    const rootstyles = [style.window]

    if (visible) {
        rootstyles.push(style.active)
    }

  return (
    <div className={rootstyles.join(' ')} onClick={() => setVisible(false)}>
        <div className={style.windowContent} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default PostWindow