import { useContext } from "react";
import { useState } from "react"
import { WorkoutContext } from "../context/WrokoutContext";
import { AuthContext } from "../context/authContext";


function WorkoutForm() {
    const [title,setTitle]=useState('');
    const [load,setLoad]=useState('');
    const [reps,setreps]=useState('');
    const [error,setError]=useState('')
    const {dispatch}=useContext(WorkoutContext)
    const {user}=useContext(AuthContext)
    const handleSubmit=async(e)=>{ 
        e.preventDefault();
        const workout={title,load,reps};
       if(!user) {
        setError("You must be logged in")
       }
        const response=await fetch("http://localhost:4000/api/workouts",{
            method:'POST',
            body:JSON.stringify(workout),
            
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
              }
              

            
        })
        const json=await response.json();
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('');
            setLoad('');
            setreps(" ")
            setError(null);
            dispatch({type:"CREATE_WORKOUTS",payload:json})
            console.log('new Workout added',json);

        }
    }
  return (
    <div >
       <form action="" onSubmit={handleSubmit} className="flex flex-col px-7 py-6">
        <h3 className="text-xl font-bold text-red-800">Add a new Workout</h3>
        <label htmlFor="">Excercise Title</label>
        <input
         type="text" 
         onChange={(e)=>setTitle(e.target.value)}
         value={title}
         className="h-10 rounded-md "
        />

          <label htmlFor="">Load(in kg)</label>
        <input
         type="number" 
         onChange={(e)=>setLoad(e.target.value)}
         value={load}
          className="h-10 rounded-md"
        />

         <label htmlFor="">Reps</label>
        <input
         type="number" 
         onChange={(e)=>setreps(e.target.value)}
         value={reps}
         className="h-10 rounded-md"

        />
        <button className="px-4 py-3 bg-green-500 rounded-md" type="submit">ADD WORKOUT</button>
       {error&& <div>{error}</div>}
       </form>
    </div>
  )
}

export default WorkoutForm 