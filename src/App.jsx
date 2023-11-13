
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/Home'


function App() {
 

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Layout>

    

     
        
    </>
  )
}

export default App
