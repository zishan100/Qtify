import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import style from './Section.module.css'
import { Grid, Typography ,Button } from '@mui/material'
import Carousel from '../Carousel/Carousel';
import { CircularProgress ,Box , Tab} from '@mui/material'
import { TabContext , TabPanel , TabList } from '@mui/lab';
import { fetchGenresData } from '../Api/Api';

export default function Section({albums,title}) {
  
   let [ toggle , setToggle ] = useState(false);  
   
   let [genres , setGenres ] = useState([]);
   let [tabs , setTabs ] = useState('all');
   let [filteredSongs , setFilteredSongs] = useState([]);

   useEffect(()=>{
        fetchGenres();
   },[]);
   
   useEffect(()=>{
      if(albums && albums.length > 0){
        setFilteredSongs(albums);
      }  
   },[albums]) 

   const fetchGenres = async()=>{
    try{
        const apiData = await fetchGenresData();
        if( apiData && apiData.data.length > 0 ){
            setGenres(apiData.data);
        }
        
    }catch(err){
        console.log(err);
      }
   }
   
   const handleTabChange = (e,newVal)=>{
        
        setTabs(newVal);
        
        if( newVal === 'all' ){
            // console.log(albums);
            setFilteredSongs(albums);
        }else{
            const updateFilterSongs = albums.filter((songs)=>(songs.genre.key === newVal))
            setFilteredSongs(updateFilterSongs);
            // console.log(updateFilterSongs);   
        }
        
    }


  return(
    <div className={style.container} >
       
       
            <div className={style.sectionHeader} >
                <Typography className={style.albumsTitle} variant='h5' gutterBottom >{title}</Typography>
                {
                    title.toLowerCase() !== 'songs' &&  (
                        <Button 
                            variant='text' 
                            className={style.sectionButton}
                            onClick={()=>setToggle(!toggle)} 
                        >
                            { toggle ? 'Collapse' : 'Show all' }
                        </Button>     
                    )
                }
                
            </div> 
            {
                title.toLowerCase() !== 'songs' && (toggle  ? 
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
                                lg={2}
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
                        data={albums} 
                        component={(albums)=>(<Card  key={albums.id} cardObj={albums} />)}
                      />
                    )
                
                    
                ))
            }

            {
                title.toLowerCase() === 'songs' && 
                (
                    filteredSongs.length > 0 ? (
                        <React.Fragment>    
                        <TabContext 
                            value={tabs}
                        >
                            <Box sx={{ marginBottom:2, borderBottom: 1, borderColor: 'divider' }}>
                                <TabList  
                                    onChange={handleTabChange} 
                                >
                                    <Tab key='all' className={style.tabColor} label='All' value='all' /> 
                                    {
                                        genres.map((genre)=>(<Tab key={genre.key} className={style.tabColor} label={genre.label} value={genre.key} />))
                                    }
                                </TabList>
    
                            </Box>
                        </TabContext> 
                        <Carousel 
                            data={filteredSongs} 
                            component={(filteredSong)=>(<Card  key={filteredSong.id} cardObj={filteredSong} />)}
                        />
    
                        
                    </React.Fragment>  
                    ) : ''
                )

            }
    </div>
  )
}
