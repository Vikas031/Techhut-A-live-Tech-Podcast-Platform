import { useState,useRef, useEffect } from "react";
import { useStateWithCallback } from "./useStateWithCallback";

const users=[{
  id:1,
  name:'Rakesh'
},
{
  id:2,
  name:'John Doe'
} ]

export const useWebRTC=()=>{
    const [clients,setClients]=useStateWithCallback(users);
    const audioElements=useRef({
      
    });
    const connections=useRef({});
    const localMediaStreams=useRef(null);

    const provideRef=(instance,userId)=>{
      audioElements.current[userId]=instance;
    }

    // capture Media
    useEffect(()=>{
      const startCapture=async ()=>{
        localMediaStreams.current=await navigator.mediaDevices.getUserMedia({
          audio:true,
        })
      };
      startCapture().then(()=>{
          
      })
    })
      return {clients};
};

