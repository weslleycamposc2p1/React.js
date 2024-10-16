import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './assets/Components/Header'
import Home from './assets/Components/Home'
import Instrumentos from './assets/Components/Instrumentos'
import Mapa from './assets/Components/Mapa'
import Forms from './assets/Components/Forms'
import Footer from './assets/Components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Instrumentos" element={<Instrumentos />}/>
          <Route path="Mapa" element={ <Mapa />}/>
          <Route path="Forms" element={<Forms />}/>
        </Routes>
        <Footer />
      </Router>


    </>
  )
}

export default App
