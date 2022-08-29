const roomService = require("../services/room-service");

class RoomsController{
    async create(req,res){
        const {Topic,roomType}=req.body;

        if(!Topic||!roomType){
            return res.status(400).json({message:'All Field are required'})
        }

        const room =await roomService.create(
            {
                topic:Topic,
                roomType,
                ownerId:req.user._id,
            }
        )

        return res.json()


    }
}

module.exports=new RoomsController