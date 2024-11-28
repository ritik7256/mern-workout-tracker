import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from "./components/Navbar"
function App() {
  

  return (
    <>
      <div className='App bg-gray-400 min-h-screen'>
        <BrowserRouter>
        <Navbar/>
          <div>
            <Routes>
              <Route path='/' element={<Home/>}/>
              
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
