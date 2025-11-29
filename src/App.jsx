
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Signin from './pages/auth/SignIn'
import Signup from './pages/auth/SignUp'
import Users from './pages/user-management/users'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/auth/signin' element={<Signin />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/users' element={<Users />} />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
