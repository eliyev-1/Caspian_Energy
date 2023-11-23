
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductsDetailPage from './pages/ProductsPage/productsDetailPage'
import ProductsInfoPage from './pages/ProductsPage/productsInfoPage'
import PartnersPage from './pages/PartnersPage'
import CataloguePage from './pages/CataloguePage'
import ContactPage from './pages/ContactPage'
import SupportPage from './pages/SupportPage'
import NewsPage from './pages/NewsPage'




function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/products'>
            <Route index element={<ProductsPage />} />

            <Route path=':id' element={<ProductsDetailPage />} >
              <Route path=':id/info' element={<ProductsInfoPage />} />
            </Route>





          </Route>


          <Route path='/partners' element={<PartnersPage />} />
          <Route path='/catalogue' element={<CataloguePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/news' element={<NewsPage />} />

        </Routes>
      </Layout>





    </>
  )
}

export default App
