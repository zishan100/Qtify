import React from 'react'
import style from './Logo.module.css'

export default function Logo({pngImage}) {
  return (
    <div className={style.logoContainer} >
        <img  src={pngImage} alt="Qtify Logo"  />  
    </div>
    
  )
}
