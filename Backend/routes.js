const router=require('express').Router();
const AuthController=require('./controllers/Authcontroller');
const ActivateController=require('./controllers/ActivateController');
const authMiddleware=require('./middleware/auth-middleware');

router.post('/api/send-otp',AuthController.sendOtp)
router.post('/api/verify-otp',AuthController.verifyOtp);
router.post('/api/activate',authMiddleware,ActivateController.activate);


module.exports=router;