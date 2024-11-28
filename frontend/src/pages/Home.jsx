import { useEffect } from "react"
import axios from "axios"
import Display from "../components/Display"
import WorkoutForm from "../components/WorkoutForm"
import { useContext } from "react"
import { WorkoutContext } from "../context/WrokoutContext"

function Home() {
      const{workouts,dispatch}=useContext(WorkoutContext)
    useEffect(()=>{
        const fetchdata=async()=>{
         const response=await axios.get("http://localhost:4000/api/users");
         if(response.status==200)
          dispatch({type:"SET_WORKOUTS",payload:response.data})
      
        }
        fetchdata();
    },[])
  return (
    <div className="home flex justify-between">
         

         <div className="workouts">
        
          {workouts&&workouts.map((workout)=>(
               <Display key={workout._id} workou={workout}/>
          ))};
          
        </div>

         
         <WorkoutForm />
         
       
    </div>
  )
}

export default Home 