const otpService = require('../services/otp-service');
const UserService=require('../services/user-service')
const TokenService=require('../services/token-service');
const tokenService = require('../services/token-service');
const OtpService=require('../services/otp-service')
const User_dtos=require('../dtos/user-dto');
class Authcontroller{

    async sendOtp(req,res){
        //logic
        const {phone}=req.body;
        if(!phone){
            res.status(400).json({message:'Phone Field is Required'});
        }
        const otp=await OtpService.generateOtp();
        const ttl=1000*60*10;//2 min time
        const expires=Date.now()+ttl;
        const data=`${phone}.${otp}.${expires}`;
        const hash =OtpService.hashOtp(data); //hashed info
        

        //send otp
        try{
            // await otpService.sendBySms(phone,otp);
            return res.json({
                hash:`${hash}.${expires}`,
                phone,
                otp
            })
        }catch(err){
            console.log(err);
            res.status(500).json({message:'OTP sending failed'})
        }
       

        //sms service using twilio
        res.json({hash});
    }

    async verifyOtp(req,res){

        const {otp,hash,phone}=req.body;
        if(!otp || !hash || !phone){
            res.status(400).json({message:"All Fields are Required"});
        }
        
        const [hashedOtp ,expires]=hash.split('.');
        if(Date.now()> +expires){
            res.status(400).json({message:'Otp Expired'});
        }

        const data=`${phone}.${otp}.${expires}`;
        const isValid=otpService.verifyOtp(hashedOtp,data);
        if(!isValid){
            res.status(400).json({message:"Invalid Otp"})
        }

        let user;
       
        try{
            user =await UserService.findUser({phone:phone});
            if(!user){
                user=await UserService.createUser({phone});
            }
        }catch(err){
            console.log(err)
            res.status(500).json({message:'DB Error'})
        }

        //JWT(jason web token) TOKEN
        const {accessToken,refreshToken}=tokenService.generateTokens({_id:user._id,activated:false});

        await tokenService.storeRefreshTokens(refreshToken,user._id);
        res.cookie('refreshtoken',refreshToken,{
            maxAge:1000*60*60*24*30,
            httpOnly:true
        })
        res.cookie('accesstoken',accessToken,{
            maxAge:1000*60*60*24*30,
            httpOnly:true
        })
        const User=new User_dtos(user);
        res.json({auth:true,user:User})
    }
}

module.exports=new Authcontroller();