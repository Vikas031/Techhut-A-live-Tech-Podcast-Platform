import axios from "axios";

const api=axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    withCredentials:true,
    headers:{
        'Content-type':'application/json',
        Accept:'application/json'
    }
})

export const sendOtp=(data)=>api.post('/api/send-otp',data);
export const verifyOtp=(data)=>api.post('/api/verify-otp',data);
export const activate=(data)=>api.post('/api/activate',data);
export const logout=()=>api.post('/api/logout');
export const createRoom=(data)=>api.post('/api/rooms',data)
export const getAllRooms=()=>api.get('/api/rooms')
export const getRoom=(roomId)=>api.get(`/api/rooms/${roomId}`)
//interceptors: if accesstoken is expired
api.interceptors.response.use(
    (config)=>{
        return config;
    },
    
    async (err)=>{
        const originalReq=err.config;
        if(err.response.status===401&&err.config&&!err.config._isRetry){
            originalReq._isRetry=true;
            try{
                const response=await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`,{
                    withCredentials:true,
                })
               return api.request(originalReq);        
            }catch(err){
                console.log(err.message);
            }
        }
        throw err;
    }
)

export default api;