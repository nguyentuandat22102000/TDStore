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
  const futures = [
    {
      id:1,
      img: Shipping,
      tittle: "Free Shipping",
      disc: "ON ORDER OVER $50",
    },
    {
      id:2,
      img: Support,
      tittle: "SUPPORT",
      disc: "24/7 SUPPORT",
    },
    {
      id:3,
      img: Quatity,
      tittle: "SUPERIOR QUALITY",
      disc: "QUALITY PRODUCTS",
    },
  ];
  const futureList = futures.map((future) => (
    <div key={future.id} className="col-span-2 mx-auto text-center cursor-pointer shadow-xl w-[300px] h-[200px] hover:border-indigo-200 hover:border-2 hover:text-red-400">
      <img src={future.img} alt={future.tittle} className="mx-auto w-[100px] h-[100px]"/>
      <h2 className="my-4 font-bold">{future.tittle}</h2>
      <span className="text-gray-400">{future.disc}</span>
    </div>
  ));
  return (
    <div className="w-full h-screen lg:relative">
      <Header />
      <Banner />
      <div className="container__wide grid grid-cols-6 py-10">
          {
            futureList
          }
      </div>
      <Category/>
      <Product/>
      <Blog/>
      <Contact />
    </div>
  );
}

export default App;
