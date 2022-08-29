import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";
export function useLoadingwithRefresh(){
    const [loading,setloading]=useState(true);
    const dispatch=useDispatch();
    useEffect(()=>{
        (async ()=>{
            try{
                const {data}=await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`,{
                    withCredentials:true,
                });
                if(!data)
                return ;
                dispatch(setAuth(data));
                setloading(false);
            }catch(err){
                console.log(err);
                setloading(false);
            }     
        })()
    },[])
    
    return {loading}
}

