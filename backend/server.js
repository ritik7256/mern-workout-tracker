
require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose")

const workoutRoutes=require("./routes/workroutes")
const app=express();
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.methods);
    next();
})

app.use("/api/users",workoutRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("listening to the port ",process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})

