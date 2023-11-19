
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductsDetailPage from './pages/ProductsPage/productsDetailPage'
import PartnersPage from './pages/PartnersPage'
import CataloguePage from './pages/CataloguePage'
import ContactPage from './pages/ContactPage'




function App() {
 

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/:id' element={<ProductsDetailPage/>}></Route>
        <Route path='/partners' element={<PartnersPage/>}/>
        <Route path='/catalogue' element={<CataloguePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>

      </Routes>
    </Layout>

    

     
        
    </>
  )
}

export default App
