
require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors");
const workoutRoutes=require("./routes/workroutes")
const userRoutes=require("./routes/user")
const app=express();
app.use(express.json());
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path,req.methods);
    next();
})

app.use("/api/workouts",workoutRoutes);
app.use("/api/user",userRoutes)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("listening to the port ",process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})

