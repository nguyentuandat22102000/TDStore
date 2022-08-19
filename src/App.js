import React from "react";
import Header from "./components/Nav/Header";
import Banner from "./components/Banner/Banner";
import Quatity from "./asset/image/future/quatity.png";
import Shipping from "./asset/image/future/shipping.png";
import Support from "./asset/image/future/support.png";
import Product from './components/Product/Product';
import Category from './components/Category/category';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  
  return (
    <div className="w-full h-screen lg:relative">
      <Header />
      <Banner />
      <Category/>
      <Product/>
      <Blog/>
      <Contact />
    </div>
  );
}

export default App;
