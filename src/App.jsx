
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Header from './components/Header/Header'
const App=()=> {
  return (
    <>
      <Navbar/>
      <Header/>
     <Routes>
      <Route path='/' element={<Portfolio/> }></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
     <Footer/>
   
    </>
  )
}

export default App