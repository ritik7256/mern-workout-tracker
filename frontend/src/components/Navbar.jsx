import { Link } from "react-router-dom"


function Navbar() {
  return (
    <header>
        <div className="container bg-white h-16">
            <Link to={"/"}>
               <h1 className="text-xl font-bold px-7 py-3 ">Workout</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar
