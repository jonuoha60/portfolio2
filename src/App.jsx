import { useState } from 'react'
import './index.css'
import { Home } from './components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/pages/Header'
import { Skills } from './components/pages/Skills'
import { Projects } from './components/pages/Projects'
import { Contact } from './components/pages/Contact'
import { ProjectTemplate } from './components/pages/template/ProjectTemplate'

function App() {

  return (
    <div className='app'>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:name' element={<ProjectTemplate />} />
      </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
