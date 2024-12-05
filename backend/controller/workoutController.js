const Workout=require("../models/Workout")
const mongoose=require('mongoose');


//get all workouts
const getAllworkout=async(req,res)=>{
    try{
        const user_id=req.user._id;
        const Allworkouts=await Workout.find({user_id}).sort({createdAt:-1});
        res.status(200).json(Allworkouts);
    }catch(error){
        res.json({msg:error.message})
    }
 

}

//get a single workout
const getWorkout=async(req,res)=>{
   const{id}=req.params;
   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such workout"})
  }
   const workout=await Workout.findById(id);
     

   if(!workout){
    return res.status(400).json({error:"no workouts"})
   }
   res.json(workout)

}

//create new  worlout
const createworkout=async(req,res)=>{
    const{reps,load,title}=req.body;
    try{
      const user_id= req.user._id;
        const workout=await Workout.create({title,load,reps,user_id})
        res.status(200).json(workout);
    }catch(error){
       res.status(400).json({error:error.message})
    }
}

//delete a workout
const deleteWorkout=async(req,res)=>{
  const  {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such workout"})
  }
  const workout=await Workout.findOneAndDelete({_id:id});
  if(!workout){
    return res.status(400).json({error:"No such workout"})
  }
  res.status(200).json(workout)
}
const updateWorkout=async(req,res)=>{
    const  {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such workout"})
  }
  const workout=await Workout.findOneAndUpdate({_id:id},{
    ...req.body
  });
  if(!workout){
    return res.status(400).json({error:"No such workout"})
  }
}
module.exports={
    createworkout,
    getAllworkout,
    getWorkout,
    updateWorkout,
    deleteWorkout
}