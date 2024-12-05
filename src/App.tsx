import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'
import ScrollToTop from './ScrollToTop'
import GiftDetails from './pages/GiftDetails/GiftDetails'
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <div className='layout'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>            
                <Route path='/:name' element={<CharacterDetails />}/>            
                <Route path='/item/:id' element={<GiftDetails />}/>            
            </Routes>
            <Footer />
            <ScrollTopButton />
        </div>
    </BrowserRouter>

  )
}

export default App
