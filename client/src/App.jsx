import React from 'react'
import LoginForm from './components/LoginForm'
import DisplayData from './components/DisplayData'
import { Route, Routes } from 'react-router-dom'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <div className='bg-[#10172a] h-screen flex items-center justify-center'>
      {/* <LoginForm/> */}
      {/* <DisplayData/> */}
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/getUser' element={<DisplayData/>}/>
        <Route path='/updateuser/:id' element={<UpdateUser/>}/>
      </Routes>
    </div>
  )
}

export default App