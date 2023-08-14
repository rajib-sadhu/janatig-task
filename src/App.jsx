
import './App.css'
import Brands from './components/Brands'
import ChooseUs from './components/ChooseUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Works from './components/Works'

function App() {

  return (
    <div className='bg-[#EFEFED] min-h-screen' >
      <Navbar />
      <Header />
      <Brands />
      <Works />
      <ChooseUs />
      <ContactUs />
      <Footer/>
    </div>
  )
}

export default App
