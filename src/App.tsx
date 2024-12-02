import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'

const App = () => {
  return (
    <BrowserRouter>
        <div className='layout'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>            
                <Route path='/:name' element={<CharacterDetails />}/>            
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>

  )
}

export default App
