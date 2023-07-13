import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainNav from './components/MainNav'
import Trending from './pages/Trending'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Search from './pages/Search'

function App() {
  
  return (
    <>
      <div className=' min-h-screen bg-[#242933] pt-16 md:pt-20 pb-16'>
        <Header/>
        <div>
          <Routes>
            <Route path='/' element={<Trending/>} />
            <Route path='/movies' element={<Movies/>} />
            <Route path='/series' element={<Series/>} />
            <Route path='/search' element={<Search/>} />
          </Routes>
        </div>
        <MainNav/>
      </div>
    </>
  )
}

export default App
