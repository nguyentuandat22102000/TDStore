import React from 'react';
import { useEffect, useState } from "react";

const Category = () => {
    
    const dataCategories = "http://localhost:3001/categories";
    const [dbCategories, setDbCategories] = useState([]);

    useEffect(() => {
        fetch(dataCategories)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setDbCategories(data);
          });
    }, []);
    const listCategory = dbCategories.map((input) => (
      <div
        key={input.id}
        className="group cursor-pointer col-span-6 m-2 relative
           duration-500 overflow-hidden hover:box__shadow
           "
      >
        <img
          alt={input.category}
          src={input.imgUrl}
          className="h-[300px] w-full object-cover p-2"
        />
        <h4 className="text-4xl text-white font-bold text__shadow__2 absolute left-1/2 -translate-x-1/2 duration-500 group-hover:top-1/2 group-hover:-translate-y-1/2">
          {input.category}
        </h4>
      </div>
    ));
    return (
      <div className="w-full my-10">
        <h1 className="text-center my-4">Category</h1>
        <div className="container__wide grid grid-cols-12 h-full text-center pt-8">
          {
            listCategory
          }
        </div>
      </div>
    );
}

export default Category;
