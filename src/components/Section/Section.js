import React, { useState } from 'react'
import Card from '../Card/Card';
import style from './Section.module.css'
import { Grid, Typography ,Button } from '@mui/material'
import Carousel from '../Carousel/Carousel';
import { CircularProgress ,Box } from '@mui/material'

export default function Section({albums,title}) {
  
   let [ toggle , setToggle ] = useState(false);  
    


  return(
    <div className={style.container} >
       
       
            <div className={style.sectionHeader} >
                <Typography className={style.albumsTitle} variant='h6' gutterBottom >{title}</Typography>
                <Button 
                    variant='text' 
                    className={style.sectionButton}
                    onClick={()=>setToggle(!toggle)} 
                >
                   { toggle ? 'Collapse' : 'Show all' }
                </Button>
            </div> 
            {
                toggle ? 
                (<Grid container >
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
                </Grid>) : 
                (
                    albums.length === 0 ? 
                    ( 
                    <Box py={2} sx={{ display: 'flex', marginLeft:4  }}>
                        <CircularProgress sx={{ color:'#34C94B' }}  />
                    </Box> ) : 
                    ( <Carousel 
                        albums={albums} 
                        component={(albums)=>(<Card  key={albums.id} cardObj={albums} />)}
                      />
                    )
                
                    
                )   

                 

            }
    </div>
  )
}
