import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
function App() {
  

  return (
    <>
      <div className='App bg-gray-400 min-h-screen'>
        <BrowserRouter>
        <Navbar/>
          <div>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="signup" element={<Signup/>}/>
              <Route path="Login" element={<Login/>}/>
              
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
