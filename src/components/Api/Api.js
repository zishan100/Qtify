import axios from 'axios'

export const BaseUrl = 'https://qtify-backend-labs.crio.do'

export const fetchTopAlbumsApi = async()=>{
    try{
        const apiRes = await axios.get(`${BaseUrl}/albums/top`)
        
        return apiRes.data;
    }catch(err){
        console.log(err);
    }
} 


export const fetchNewAlbumsApi = async()=>{
    try{
        const apiRes = await axios.get(`${BaseUrl}/albums/new`)
       
        return apiRes.data;
    }catch(err){
        console.log(err);
    }         
}