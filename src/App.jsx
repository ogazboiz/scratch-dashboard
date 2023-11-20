
import './App.css'
import Sidebar from './Sidebar'
import Home from './Home'
import Header from './Header'
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default App
