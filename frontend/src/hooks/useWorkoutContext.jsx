import { useContext } from "react"
import { WorkoutContext } from "../context/WrokoutContext"

export const UseWorkoutContext=()=>{
    const context=useContext(WorkoutContext);
    return context;
    
}