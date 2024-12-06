import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import {UseWorkoutContext} from "../hooks/useWorkoutContext"
export const UseLogout=()=>{
    const {dispatch}=useContext(AuthContext);
    

     const logout=()=>{
    
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'});

     }
     return {logout};

}