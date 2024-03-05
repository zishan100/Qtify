import React from 'react'
import style from './Card.module.css'
import { Chip, Typography } from '@mui/material'

export default function Card({cardObj}) {
  return (
    <div className={style.container} >
       <div className={style.imageCard} >
            <img src={cardObj.image} alt={cardObj.title} width={159} height={170} />
            <Chip className={style.chipButton} label={`${cardObj.follows || cardObj.likes} ${cardObj.follows ? 'Follows' : 'Likes'} `} variant='outlined' />
       </div> 
       <Typography variant='body1' mt={1} gutterBottom >{cardObj.title}</Typography>
    </div>
  )
}
