import axios from "axios"
import { useContext } from "react";
import { WorkoutContext } from "../context/WrokoutContext";
import  formatDistanceToNow from "date-fns/formatDistanceToNow"
export default function Display({workou}) {
  const{dispatch}=useContext(WorkoutContext)
  const handleDelete=async()=>{
   nce
       const response=await fetch("http://localhost:4000/api/users/"+workou._id,{
        method:"DELETE"
       });
       const json= await response.json();
       if(response.ok){
        dispatch({type:'DELETE_WORKOUT',payload:json})
       }
  }
  return (
    
        <div className="min-h-24 w-[400px] bg-white rounded-md mt-8 px-5 ">
        <h4 className="text-green-900 text-lg font-bold">{workou.title}</h4>
         
         <p><strong>Load(kg)-</strong>{workou.reps} </p>
         <p> <strong>Reps-</strong>{workou.load} </p>

         <p>{formatDistanceToNow(new Date(workou.createdAt),{addSuffix:true})} </p>
          <button onClick={handleDelete } className="px-3 py-2 bg-red-500 ml-[100px] rounded-lg">Delete </button>
         </div>
    
  )
} 