import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Nearby from "./pages/Nearby";
import Gift from "./pages/Gift";
import Beautyspas from './pages/Beauty&spas';
import Things from './pages/Things';
import AutoHome from './pages/Auto&home';
import Food from './pages/Food';
import Goods from './pages/Goods';
import Travel from './pages/Travel';
import Coupons from './pages/Coupons';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToggleContentExample from './components/MiniFooter';
import Snavbar from './components/Snavbar';
import NearSingle from './pages/NearSingle';
import GiftSingle from './pages/GiftSingle';
import BeautySingle from './pages/BeautySingle'
import TravelSingle from './pages/TravelSingle';
import GoodSingle from './pages/GoodSingle';
import FoodSingle from './pages/FoodSingle';
import ThingSingle from './pages/ThingSingle';
import HomeSingle from './pages/HomeSingle';



function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/nearby' element={< Nearby/>}/>
      <Route path='/nearby/:_id' element={<NearSingle/>} />
      <Route path='/gift' element={<Gift/>}/>
      <Route path='/gift/:_id' element={<GiftSingle/>} />
      <Route path='/Beauty-and-Spas' element={<Beautyspas/>}/>
      <Route path='/Beauty-and-Spas/:_id' element={<BeautySingle/>} />
      <Route path='/things' element={<Things/>}/>
      <Route path='/things/:_id' element={<ThingSingle/>} />
      <Route path='/autohome' element={<AutoHome/>}/>
      <Route path='/autohome/:_id' element={<HomeSingle/>} />
      <Route path='/food' element={<Food/>}/>
      <Route path='/food/:_id' element={<FoodSingle/>} />
      <Route path='/goods' element={<Goods/>}/>
      <Route path='/goods/:_id' element={<GoodSingle/>} />
      <Route path='/travel' element={<Travel/>}/>
      <Route path='/travel/:_id' element={<TravelSingle/>} />
    <Route path='/coupons' element={<Coupons/>}/>
    </Routes>
    <ToggleContentExample/>
    <Footer/>
    </>
  )
}

export default App
