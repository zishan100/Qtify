import React from 'react'
import LogoImg from '../../assets/logoimage.png'
import style from './Logo.module.css'

export default function Logo() {
  return (
    <div className={style.logoContainer} >
        <img  src={LogoImg} alt="Qtify Logo"  />  
    </div>
    
  )
}
