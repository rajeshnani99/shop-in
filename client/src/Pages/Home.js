import React from 'react';
import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import Slider from "../Components/Slider"
import Product from '../Components/Product'
import Login from './Login'
import Register from './Register'
import Cart from "./Cart"
import Footer from "../Components/Footer";
import BestSeller from '../Components/BestSeller';

//---------react-routing-----------
import {

  Routes,
  Route,
} from "react-router-dom";

///
const Home = () => {
  return (
    <div>
           <Announcement/>
        <Navbar/> 
       
   <Routes>
    <Route path="/" element={<Slider />}/>
    <Route path="/product" element={<Product />}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Cart" element={<Cart/>}/>
   <Route path="/BestSeller" element={<BestSeller/>}/>
   </Routes>
   
<Footer/>
    </div>
  )
}

export default Home
