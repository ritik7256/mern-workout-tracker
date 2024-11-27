const express=require('express');
const router=express.Router();

const {
    createworkout,getAllworkout,getWorkout,deleteWorkout,updateWorkout
}=require("../controller/workoutController")



router.get("/",getAllworkout);
//

router.get("/:id",getWorkout)


router.post("/",createworkout)

router.delete("/:id",deleteWorkout)

router.patch("/:id",updateWorkout)
module.exports=router;