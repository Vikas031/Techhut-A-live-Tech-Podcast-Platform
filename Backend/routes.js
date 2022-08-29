const router=require('express').Router();
const AuthController=require('./controllers/Authcontroller');
const ActivateController=require('./controllers/ActivateController');
const authMiddleware=require('./middleware/auth-middleware');
const RoomsController =require('./controllers/RoomsController')

router.post('/api/send-otp',AuthController.sendOtp)
router.post('/api/verify-otp',AuthController.verifyOtp);
router.post('/api/activate',authMiddleware,ActivateController.activate);
router.get('/api/refresh',AuthController.refresh);
router.post('/api/logout',authMiddleware,AuthController.logout)
router.post('/api/rooms',authMiddleware,RoomsController.create);


module.exports=router;