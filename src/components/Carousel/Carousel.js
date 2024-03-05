import React , { useRef , useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Carousel.module.css'
// import { Card , CardMedia , Typography , Button , CardContent ,Grid } from '@mui/material'
import Card from '../Card/Card';
import { settings } from '../const';

function Carousel ({data,component}) {
    
    let slickRef = useRef(null)
    
    useEffect(() => {
        slickRef.current.slickGoTo(0)
        
      }, [data])
    
    return (
        <div className={style.sliderContainer} >
           
            <Slider 
                {...settings}  
                className={style.slider} 
                ref={slickRef} 
            >
            
            {
                data &&  data.map((album)=>{
                    return (component(album))
                })
            }
            </Slider>
        
        </div>
         
        
         
    );
  
}

export default Carousel;
