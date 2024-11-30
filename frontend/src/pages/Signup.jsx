import { useState } from "react"
import { UseSignUp } from "../hooks/useSignup";

function Signup() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
     const {signup,error,isLoading}=UseSignUp();

      const handleSubmit=async(e)=>{
          e.preventDefault();
        const data= await signup(email,password)
        console.log(data)
      }
  return (
    <div className="flex justify-center items-center min-h-screen">

        
      <div className="w-full max-w-xs  ">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="username"
        type="email"
         placeholder="email"
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
    />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
       className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
         type="password"
          placeholder="******************"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
     />
      
    </div>
    <div className="flex items-center justify-between">
      <button
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        disabled={isLoading}
        >
        Sign Up
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
      {error&& <p className="text-center text-gray-500 text-xs">
       {error}
    </p>}
    </div>
  </form>
    
  
</div>
</div>

  )
}

export default Signup
