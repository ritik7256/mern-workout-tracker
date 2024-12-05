import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import {UseWorkoutContext} from "../hooks/useWorkoutContext"
export const UseLogout=()=>{
    const {dispatch}=useContext(AuthContext);
    const{dispatch:workoutDispatch}=UseWorkoutContext

     const logout=()=>{
      workoutDispatch({type:'SET_WORKOUTS',payload:null})
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});

     }
     return {logout};

}