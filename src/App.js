import React , {useState,useEffect} from 'react';
import axios from 'axios'
import Navbar from './components/Navbar/Navbar'
import HeroImage from './components/HeroImage/HeroImage';
import Section from './components/Section/Section';
import { StyledEngineProvider } from '@mui/material/styles'
import './style.css'
import { fetchTopAlbumsApi , fetchNewAlbumsApi , fetchSongsData } from './components/Api/Api';

function App () {
  
  const [topAlbumList , setTopAlbumList] = useState([]);
  const [newAlbumList , setNewAlbumList ] = useState([]);
  const [songsAlbumList ,setSongsAlbumList] = useState([]);

  useEffect(()=>{
    fetchTopAlbums()     
  },[])
  
  useEffect(()=>{
    fetchNewAlbums();
  },[])
  
  useEffect(()=>{
    fetchSongsAlbums();
  },[])

  const fetchTopAlbums = async()=>{
    try{
      const apiData = await fetchTopAlbumsApi();
      // console.log(apiData);
      if( apiData && apiData.length > 0 )
          setTopAlbumList(apiData);
    }catch(err){
      console.log(err);
    }            
  }

  const fetchNewAlbums = async()=>{
    try{
      const apiData = await fetchNewAlbumsApi();
      // console.log(apiRes.data);
      if(apiData && apiData.length > 0 ) 
          setNewAlbumList(apiData);
    }catch(err){
      console.log(err);
    }            
  }

  const fetchSongsAlbums = async()=>{
    try{ 
      const apiData = await fetchSongsData(); 
      
      if( apiData && apiData.length > 0 ){
        // console.log(apiData);  
        setSongsAlbumList(apiData);
      }

    }catch(err){
      console.log(err);
    }
  }
    
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst >
          <Navbar />
          <HeroImage />
          <Section albums={topAlbumList} title='Top Albums' />
          <hr  className='hrline' />
          <Section albums={newAlbumList} title='New Albums' /> 
          <hr  className='hrline' />
          <Section albums={songsAlbumList} title='Songs' />
          <hr className='hrline' />
      </StyledEngineProvider>
    </React.Fragment>
  );
  
}

export default App;
