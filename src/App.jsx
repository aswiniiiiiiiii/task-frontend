import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './components/Auth'
import UserDashboard from './pages/UserDashboard'
import Taskfrom from './pages/Taskfrom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister={true}/>}/>
      <Route path='/userdashboard' element={<UserDashboard/>}/>
      <Route path='/taskform' element={<Taskfrom/>}/>



    </Routes>
    </>
  )
}

export default App
