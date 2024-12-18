
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
const App=()=> {
  return (
    <>
      <Navbar/>
      <Home/>
      <Portfolio/>
      <About/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App