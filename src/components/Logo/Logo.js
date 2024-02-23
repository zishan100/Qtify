import React from 'react'
import LogoImg from '../../assets/logoimage.png'
import style from './Logo.module.css'

export default function Logo() {
  return (
    <img className={style.LogoIcon} src={LogoImg} alt="Qtify Logo"  />
  )
}
