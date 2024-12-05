import{BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { useContext } from "react"
import { AuthContext } from "./context/authContext"
function App() {
    const {user}=useContext(AuthContext)

  return (
    <>
      <div className='App bg-gray-400 min-h-screen'>
        <BrowserRouter>
        <Navbar/>
          <div>
            <Routes>
              <Route path='/' element={ user?<Home/>:<Navigate to={"/login"}/>}/>

              <Route path="signup" element={!user?<Signup/>:<Navigate to={"/"}/> }/>

              <Route path="Login" element={!user?<Login/>:<Navigate to={"/"}/>}/>
              
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
