
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/Home'
import About from './pages/Home/About'


function App() {
 

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Layout>

    

     
        
    </>
  )
}

export default App
