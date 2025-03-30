import { Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
// import Footer from './components/Footer/Footer'
import Home from './component/Home/Home'
import Contact from './component/contact/contact'
import About from './component/about/About'
import Product from './component/Product/Product'
import ProductDetails from './component/Product/ProductDetails'
import Checkout from './component/checkout/Checkout'
import Cart from './component/Cart/Cart'
import './App.css'


function App() {

  return (
    <>

      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
       </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App