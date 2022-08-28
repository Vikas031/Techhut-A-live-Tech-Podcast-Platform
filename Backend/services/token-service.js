const jwt=require('jsonwebtoken');
const refreshModel = require('../models/refresh-model');
const AccessToken=process.env.JWT_ACCESS_TOKEN_SECRET;
const RefreshToken=process.env.JWT_REFRESH_TOKEN_SECRET;

class TokenService{
    
    generateTokens(payload){
        const accessToken=jwt.sign(payload,AccessToken,{
            expiresIn:'1h'
        });

        const refreshToken=jwt.sign(payload,RefreshToken,{
            expiresIn:'1y'
        })
        return {accessToken,refreshToken};
    }

    async storeRefreshTokens(token,userId){
        try{
            await refreshModel.create({
                token,
                userId,
            })
        }catch(err){
            console.log(err.message);
        }
    }

    async verifyAccessToken(token){
        return jwt.verify(token,AccessToken);
    }

}

module.exports=new TokenService();