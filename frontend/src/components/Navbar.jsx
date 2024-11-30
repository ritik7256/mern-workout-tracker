import { Link } from "react-router-dom"
import { UseLogout } from "../hooks/UseLogout"
import { useContext } from "react";
import { AuthContext } from "../context/authContext";


function Navbar() {
  const {user}=useContext(AuthContext);

  const {logout}=UseLogout();

  const handleClick=()=>{
      logout();

  }
  return (
    <header>
        <div className="container bg-white min-h-16 flex justify-between px-5  py-5 gap-3">
            <Link to={"/"}>
               <h1 className="text-xl font-bold px-7 py-3 ">Workout</h1>
            </Link>
            <nav  className="flex gap-6 ">
            {user && (
               <div className="flex">
                <p>{user.email}</p>
               <button className="px-3 py-2 bg-green-600 rounded-md" onClick={handleClick}>Log out</button>
             </div>
            )}
            {!user&& (
               <div>
                  
               <Link className="bg-red-300 px-3 py-2 rounded-md " to={"/login"}>Login</Link>

               <Link className="bg-red-500 px-3 py-2 rounded-md "  to={"/signup"}>Signup</Link>
             </div>
            )}
             
            </nav>
        </div>
    </header>
  )
}

export default Navbar
