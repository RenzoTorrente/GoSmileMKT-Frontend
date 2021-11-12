import React,{useEffect, useState} from 'react';
import { GetPostById } from '../../../Services/PostService';
export function useFormNews(id?:string){
    let [editmood, seteditmood]:any = useState();
    let [newsdata , setnewsdata]:any=useState({
    loading:false,
    })
    useEffect(() => {
    if(id){
    seteditmood(true);
    (async ()=>{
     try{ 
    let news = await GetPostById(id);
    setnewsdata({
    loading:true,
    data:news.data,
    })
    }catch(err){
    setnewsdata({
    loading:true,
    error:err
    })
    }    
    })()
    }else{
    seteditmood(false)
    }
    },[id])

if(editmood === true ){
return {
    newsdata,
    editmood
}
}else{
    return {editmood}
}
}