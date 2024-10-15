import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthRegister from './pages/register'
import AuthLogin from './pages/login'
import AdminLayout from './components/admin-view/layout'


const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1 className=''>header component</h1>

      <Routes>
      
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
      <Route path='/admin' element = {<AdminLayout/>}>

      </Route>
    </Routes>
    </div>
  )
}

export default App
