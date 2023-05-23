import React from 'react'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { logo } from  './assets'
import { Home, CreatePost } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4  '>
        <Link to='/'>
        {/* <img src={logo} alt='logo' className='w-28 object-contain'/> */}
          <p className='text-3xl font-bold text-white'>illustr<span className='blue_gradient'>AI</span>te</p>
        </Link>

        <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600' >
          Create
        </Link>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-[#1a1a1b] min-h-[calc(100vh-73px)]' > 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create-post' element={<CreatePost />}/>
        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App
