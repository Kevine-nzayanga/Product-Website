import React, { useEffect, useState } from "react";
 import {Link, useNavigate } from "react-router-dom";
import './style.css';
// import '../NavBar/index';
import '../DisplayProduct/index';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate


  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);


  // const handleClick = () => {
  //   navigate("/product-details");
  // };

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log({ products });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
        <Link to={`/form`} ><button className="add">Add Product</button></Link> 
             <br/>
             <br/>
    <div className="product">    
      {products.map((item) => (
        <div className="main" key={item.id}>
          <img className="image" src={item.thumbnail} alt="visual of product"></img>
          <h3 className="title">{item.title}</h3>
          <h4 className="price">{item.price}</h4>
          <h6 className="percent">{item.discountPercentage}</h6>
          <Link to={`/information/${item.id}`} key={item.id} >
          <button className="product-link">See Details</button>
          </Link>
        </div>
          
      ))}
    </div>
    </div>
  );
};

export default Products;
