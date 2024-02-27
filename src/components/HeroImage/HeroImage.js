import React from 'react'
import style from './HeroImage.module.css'
import { ReactComponent as HeroIcon } from '../../assets/headphone_icon.svg';

export default function HeroImage() {
  return (
    <div className={style.container} >
        <div>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>   
        </div>
        <HeroIcon height={212} />
    </div>
  )
}
