import React from 'react'
import style from './Card.module.css'
import { Chip, Typography , Tooltip } from '@mui/material'

export default function Card({cardObj}) {

  const { songs } = cardObj;

  return (
    <div className={style.container} >
      <Tooltip title={`${songs && songs.length > 0 ? songs.length : 0 } songs`} placement='top' >
        <div className={style.imageCard} >
              <img src={cardObj.image} alt={cardObj.title} width={159} height={170} />
              <Chip className={style.chipButton} label={`${cardObj.follows || cardObj.likes} ${cardObj.follows ? 'Follows' : 'Likes'} `} variant='outlined' />
        </div> 
       </Tooltip>
       <Typography variant='body1' mt={1} gutterBottom >{cardObj.title}</Typography>
    </div>
  )
}
