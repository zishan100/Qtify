import React from 'react'
import Card from '../Card/Card';
import style from './Section.module.css'
import { Grid, Typography ,Button } from '@mui/material'

export default function Section({albums,title}) {
  
    


  return(
    <div className={style.container} >
       
       <Grid container >
            <div className={style.sectionHeader} >
                <Typography variant='h6' gutterBottom >{title}</Typography>
                <Button variant='text' className={style.sectionButton} >Collapse</Button>
            </div> 
            
            <Grid 
                container 
                spacing={2}
                display='flex' 
                mx={2}
            > 
                {albums.map((tAlbums)=>{
                    return (
                        <Grid 
                            item 
                            key={tAlbums.id} 
                            lg={1.6}
                            md={2} 
                            sm={3}
                        > 
                            <Card 
                                key={tAlbums.id} 
                                cardObj={tAlbums} 
                            />
                        </Grid>  
                    )   
                })}
        
            </Grid> 
        </Grid>

    </div>
  )
}
