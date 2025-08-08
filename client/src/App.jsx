import  'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login';

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
