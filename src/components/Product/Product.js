import React from 'react';
import { useState,useEffect } from 'react';

const Product = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dbCategories, setDbCategories] = useState([]);
  const [productItem, setProductItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  



  const productJSON = "http://localhost:3001/product";
  const dataCategories = "http://localhost:3001/categories";
  useEffect(() => {
    fetch(productJSON)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDataProducts(data);
      });
  }, []);

  useEffect(() => {
    fetch(dataCategories)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDbCategories(data);
      });
  }, []);
  const listCategory = props => (
    <li
      key={props.id}
      className="list-none px-8 py-2 mx-1 box__shadow text-xl underline cursor-pointer"
      onClick={handleClick}
      tittle={props.id}
    >
      {props.category}
    </li>
  );
  const handleClick = (e) =>{
    var labelText = e.target.getAttribute("tittle");
    listManProduct(labelText);
  }
  const listManProduct = (labelText) =>{
    var listProduct = [];
    dataProducts.map((input) => {
      if (parseInt(labelText) === 1) {
        listProduct.push(input)
      }
      if(input.id_category === parseInt(labelText)){
        listProduct.push(input);
      }
    });
    setProductItem(listProduct);
  }
  
  // Get Current Page
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = productItem.slice(indexOfFirstPost, indexOfLastPost)
  const renderProduct = currentPost.map((product) => (
    <div
      key={product.id}
      className="group col-span-4 m-2 p-4 box__shadow cursor-pointer"
    >
      <div className="w-full">
        <img
          alt={product.name}
          src={product.image_product}
          className="h-[300px] w-full"
        />
      </div>
      <div className="my-4">
        <h6 className="text-xl font-semibold mb-2 group-hover:text-indigo-500">
          {product.name}
        </h6>
        <span className="text-lg text-gray-500 ">{product.price}$</span>
      </div>
      <div>
        <button className="btn btn__secondary" type="button">
          Add to cart
        </button>
      </div>
    </div>
  ));
  var listPagination = [];
  const pagination = () =>{
    for(var i = 1 ; i <= Math.ceil(productItem.length / postPerPage);i++){
      listPagination.push(i);
    }
    return listPagination
  }
  pagination()

  const renderPagination = listPagination.map((input) => (
    <ul className="inline-flex items-center -space-x-px" key={input}>
      <li>
        <button
          className="py-2 px-4 leading-tight text-gray-500 bg-white border border-gray-300 
              hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
               dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={ (event) => {
            event.preventDefault();
            paginate(input);
          }}
        >
          {input}
        </button>
      </li>
    </ul>
  ));
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="w-full my-10">
      <div className="container__wide">
        <h1 className="text-center mx-2">Products</h1>
        <div className="w-full h-[100px] flex items-center justify-center">
          {dbCategories.map((input) => listCategory(input))}
        </div>
        <div className="grid grid-cols-12">{renderProduct}</div>
        <div className="text-center my-8">{renderPagination}</div>
      </div>
    </div>
  );
}

export default Product;
